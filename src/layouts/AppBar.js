import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { Box, Heading, Button } from 'grommet'
import { Notification } from 'grommet-icons'

function AppBar(props) {
  const [showSidebar, setShowSidebar] = useState(false)
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
      <Button icon={<Notification/>} onClick={() => setShowSidebar(!showSidebar)}/>
    </Box>
  )
}

AppBar.propTypes = {
  appName: PropTypes.string.isRequired
}

export default AppBar
