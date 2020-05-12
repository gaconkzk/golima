import React, { useContext } from 'react'

import { Box, Layer } from 'grommet'

import { FormClose } from 'grommet-icons'

import { SidebarContext } from './SidebarContext'

import { SimButton } from 'components/SimButton'

const SmallSidebar = (props) => {
  let { sidebar, setSidebar } = useContext(SidebarContext)
  return (
    sidebar &&<Layer>
      
      <Box background='light-2' tag='header' justify='end' align='center' direction='row'>
        <SimButton icon={<FormClose/>} onClick={()=>setSidebar(false)} />
      </Box>
      <Box
        fill
        width='medium'
        background='light-2'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
    </Layer>
  )
}

export default SmallSidebar