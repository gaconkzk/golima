import React from 'react'
import {
  Grommet, Box, ResponsiveContext
} from 'grommet'

import Navbar from 'layouts/components/Navbar'
import Main from 'layouts/components/Main'
import { Sidebar, SidebarContextProvider, SmallSidebar } from 'layouts/components/Sidebar'

const theme = {
  global: {
    colors: {
      brand: '#222B36'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
}

function App() {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <SidebarContextProvider>
              <Navbar appname='Golima' toggleSidebar/>
              <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
                <Main/>
                {(size === 'small') ? (
                  <SmallSidebar/>
                ) : (
                  <Sidebar/>
                )}
              </Box>
            </SidebarContextProvider>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
