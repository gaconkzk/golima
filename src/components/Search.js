import React, { useContext, useState } from 'react'
import { Box, TextInput } from 'grommet'

import { Search as SearchIcon } from 'grommet-icons'

import { SimButton } from 'components/SimButton'
import { MovieContext } from './Movies/MovieContext'

const Search = (props) => {
  const { query, setQuery } = useContext(MovieContext)
  const [searchTerm, setSearchTerm] = useState(query)
  const disabled = !searchTerm || !searchTerm.trim().length
  return (
    <Box width='medium' direction='row' alignContent='stretch' gap='small'>
      <TextInput align='center' size='small' style={{ width: '300px' }} value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        onKeyPress={event => { 
          if (event.key === "Enter" && !disabled) setQuery(searchTerm.trim()) 
        }}
      ></TextInput>
      <SimButton primary icon={<SearchIcon/>} label='Goolima' onClick={() => setQuery(searchTerm.trim())} disabled={disabled}/>
    </Box>
  )
}

export { Search }