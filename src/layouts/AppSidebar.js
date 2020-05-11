import React from 'react'

import PropTypes from 'prop-types'

import { Box, Collapsible } from 'grommet'

function AppSidebar(props){
  let { show } = props
  return (
    <Collapsible direction="horizontal" open={show}>
      <Box
        flex
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

AppSidebar.propTypes = {
  show: PropTypes.bool
}

export default AppSidebar
