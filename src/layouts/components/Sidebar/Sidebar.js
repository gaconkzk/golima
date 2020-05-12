import React, { useContext } from 'react'

import { Box, Collapsible } from 'grommet'

import { SidebarContext } from 'layouts/components/Sidebar'

const Sidebar = (props) => {
  let { sidebar } = useContext(SidebarContext)

  return (
    <Collapsible direction='horizontal' open={sidebar}>
      <Box
        flex
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
    </Collapsible>
  )
}

export default Sidebar