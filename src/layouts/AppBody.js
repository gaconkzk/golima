import React from 'react'

import { Box } from 'grommet'
import AppSidebar from './AppSidebar'

const AppBody = () => (
  <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
    <Box flex align="center" justify="center">
      app body
    </Box>
    <AppSidebar/>
  </Box>
)

export default AppBody
