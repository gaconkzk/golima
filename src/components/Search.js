import React from 'react'
import { Box, TextInput } from 'grommet'

import { Search as SearchIcon } from 'grommet-icons'

import { SimButton } from 'components/SimButton'

const Search = (props) => (
<Box width='medium' direction='row' alignContent='stretch' gap='small'>
            <TextInput align='center' size='small' style={{ width: '300px' }}></TextInput>
            <SimButton primary icon={<SearchIcon/>} label='Goolima' />
          </Box>
)

export { Search }