import React, { useState } from 'react'

import { Box, Collapsible } from 'grommet'

function AppSidebar(){
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <Collapsible direction="horizontal" open={showSidebar}>
      <Box
        width="medium"
        background="light-2"
        elevation="small"
        align="center"
        justify="center"
      > 
        sidebar
      </Box>
    </Collapsible>
  )
}

export default AppSidebar
