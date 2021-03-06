const electron = require('electron')
const { app, crashReporter, BrowserWindow, Menu, session } = electron

const path = require('path')
const isDev = require('electron-is-dev')

const server = require('phimaser/lib/server')

let mainWindow

const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload)
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`)
    }
  }
}

crashReporter.start({
  productName: 'Golima',
  companyName: 'TheFlies',
  submitURL: 'https://golima.theflies.dev/issues',
  uploadToServer: false
})

function createWindow() {
  if (isDev) {
    installExtensions()
  }

  if (server && !server.isStarted) {
    const port = process.env.SERVER_PORT || 3100

    server.listen(port, () => {
      console.log(`app run on http://0.0.0.0:${port}`)
      server.isStarted = true
    })
  }

  // session.defaultSession.webRequest.onBeforeSendHeaders({urls:['*://*/*']}, (details, callback) => {
  //   console.log(details.url)
  //   callback({ requestHeaders: details.requestHeaders })
  // })
  
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
  })
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.show()
    if (isDev) {
      // Open the DevTools.
      // BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
      mainWindow.webContents.openDevTools()
      // add inspect element on right click menu
      mainWindow.webContents.on('context-menu', (e, props) => {
        Menu.buildFromTemplate([
          {
            label: 'Inspect element',
            click() {
              mainWindow.inspectElement(props.x, props.y)
            }
          }
        ]).popup(mainWindow)
      })
    }
  })

  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})