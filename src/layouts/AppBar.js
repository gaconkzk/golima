import React from 'react'

import PropTypes from 'prop-types'

import { Box, Heading, Button } from 'grommet'
import { Notification } from 'grommet-icons'

function AppBar(props) {
  let { sidebar, setSidebar } = props

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{left: 'medium', right: 'small', vertical: 'small'}}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    >
      <Heading level="3" margin="none">{props.appName}</Heading>
      <Button icon={<Notification/>} onClick={() => setSidebar(!sidebar)} focusIndicator={false}/>
    </Box>
  )
}

AppBar.propTypes = {
  appName: PropTypes.string.isRequired,
  sidebar: PropTypes.bool,
  setSidebar: PropTypes.func
}

export default AppBar
