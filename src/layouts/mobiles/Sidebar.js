import React from 'react'

import PropTypes from 'prop-types'

import { Box, Collapsible, Layer, Button } from 'grommet'
import { FormClose } from 'grommet-icons'

function AppSidebar(props){
  let { setSidebar } = props
  return (
    <Collapsible direction="horizontal">
      <Layer>
        <Box
          background="light-2"
          tag="header"
          justify="end"
          align="center"
          direction="row"
        >
          <Button icon={<FormClose/>} onClick={()=>setSidebar(false)} focusIndicator={false}/>
        </Box>
        <Box
          fill
          background="light-2"
          align="center"
          justify="center"
        >
          sidebar
        </Box>
      </Layer>
    </Collapsible>
  )
}

AppSidebar.propTypes = {
  setSidebar: PropTypes.func
}

export default AppSidebar
