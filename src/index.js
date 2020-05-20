import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'
import * as serviceWorker from './serviceWorker'

axios.defaults.baseURL = `http://${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '3100' }`

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
