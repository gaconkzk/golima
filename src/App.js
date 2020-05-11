import React from 'react'
import {
  Box,
  Grommet,
} from 'grommet'

import AppBar from './layouts/AppBar'
import AppBody from './layouts/AppBody'

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
}

const App = () => (
  <Grommet theme={theme} full>
    <Box fill>
      <AppBar appName="Golima"/>
      <AppBody />
    </Box>
  </Grommet>
)
export default App
