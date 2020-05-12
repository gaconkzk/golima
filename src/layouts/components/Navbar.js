import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import { Header, Heading } from 'grommet'
import { Notification } from 'grommet-icons'

import { SimButton } from 'components/SimButton'
import { SidebarContext } from 'layouts/components/Sidebar'

const Navbar = (props) => {
  let { appname, toggleSidebar } = props

  let { sidebar, setSidebar } = useContext(SidebarContext)

  return (
    <Header
      tag='header'
      background='brand'
      pad={{left: 'medium', right: 'small', vertical: 'small'}}
      elevation='medium'
      style={{ zIndex: '1', height: '72px' }}
      {...props}
    >
      <Heading level='3' margin='none'>{appname}</Heading>
      { toggleSidebar && 
        <SimButton icon={<Notification/>} size='small' onClick={()=>{setSidebar(!sidebar)}}/>
      }
    </Header>
  )
}

Navbar.propTypes = {
  appname: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.bool
}

Navbar.defaultProps = {
  toggleSidebar: false
}

export default Navbar