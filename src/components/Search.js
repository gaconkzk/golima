import React, { useContext, useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Text, TextInput, RadioButtonGroup } from 'grommet'

import { Search as SearchIcon } from 'grommet-icons'

import { SimButton } from 'components/SimButton'
import { MovieContext } from './Movies/MovieContext'

import { categories } from './Movies/constant'

import ResponsiveGrid from './ResponsiveGrid'

const Search = (props) => {
  const { query, setQuery, types, getTypes } = useContext(MovieContext)
  const [searchTerm, setSearchTerm] = useState(query.q)
  const disabled = !searchTerm || !searchTerm.trim().length

  const [ activedCat, setActivedCat ] = useState(null)

  const history = useHistory()

  // Stupid react hook team
  // Calling getMovies inside useEffect will caused warning
  // about exhausted deps but worked, but to fix the lint
  // we need to add getMovies into deps array, then we will got
  // inifinite loop, since getMovies getting change every call
  const memoizeGetTypes = useCallback(getTypes, [])
  useEffect(() => {
    memoizeGetTypes({provider: 'PM'})
  },[memoizeGetTypes])

  return (
    <Box direction='column' align='center' justify='center'>
      <Text>Nhấn đại cái tính sau he?</Text>
      <Box margin='15px' height='100%' direction='row'>{
        types && types['the-loai'] && 
        <RadioButtonGroup direction='row' name='types' options={types['the-loai'].map(t => ({value: t, label: categories[t] || t}))}
          value={activedCat}
          onChange={(event) => {setActivedCat(event.target.value);setQuery({t: 'the-loai', c: event.target.value})}}/>
          // types['the-loai'].map(t => 
          //   <Button  flex={{grow: 0, shrink: 1}}
          //     primary={activedCat===t}
          //     onClick={()=>{setActivedCat(t);setQuery({t: 'the-loai', c: t})}}
          //     key={t}
          //     label={categories[t] || t}
          //     />)
      }</Box>
      <Box width='medium' direction='row' alignContent='stretch' gap='small' justify='center' align='center'>
        <TextInput align='center' size='small' style={{ width: '300px' }} value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          onKeyPress={event => { 
            setActivedCat(null)
            
            // history.push('')
            if (event.key === "Enter" && !disabled) setQuery({q: searchTerm.trim()}) 
          }}
        ></TextInput>
        <SimButton primary icon={<SearchIcon/>} label='Go0lima' onClick={() => {
          history.push('')
          setActivedCat(null)
          setQuery({q: searchTerm.trim()})}} disabled={disabled}/>
      </Box>
    </Box>
  )
}

export { Search }