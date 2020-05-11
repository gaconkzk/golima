import React, { useState } from 'react'
import {
  Box,
  Grommet,
} from 'grommet'

import AppBar from './layouts/AppBar'
import AppSidebar from './layouts/AppSidebar'

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

const App = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar appName="Golima" sidebar={sidebar} setSidebar={setSidebar}/>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align="center" justify="center">
            app body
          </Box>
          <AppSidebar show={sidebar}/>
        </Box>
      </Box>
    </Grommet>
  )
}
export default App
