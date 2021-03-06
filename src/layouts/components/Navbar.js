import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import { Header, Heading, ThemeContext } from 'grommet'
import { Notification } from 'grommet-icons'

import { SimButton } from 'components/SimButton'
import { SidebarContext } from 'layouts/components/Sidebar'

import Button from '@material-ui/core/Button'

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
      <ThemeContext.Extend
        value={{
          heading: {
            extend: {
              'color': '#FFEECC',
              'text-decoration': 'none'
            }
          }
        }}>
        <Heading level={3} margin='none' as='a' href='#'>{appname}</Heading>
        <Button variant="contained" color="primary">Good?</Button>
      </ThemeContext.Extend>
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