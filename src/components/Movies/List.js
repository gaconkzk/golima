import React, { useContext, useEffect, useCallback } from 'react'
import { Box } from 'grommet'
import { Run } from 'grommet-icons'

import ResponsiveGrid from 'components/ResponsiveGrid'
import { MovieContext } from './MovieContext'

import Item from './Item'

// columns, rows and areas are for Grid with a known number of contents / boxes.

// If the size is small, we only see 1 column
// If the size is medium, we only see 3 columns
// If the size is either large or xlarge, we see 4 or 5 columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto", "auto", "auto"]
}

const MovieList = () => {
  let { movies, loading, getMovies, query }= useContext(MovieContext)

  // Stupid react hook team
  // Calling getMovies inside useEffect will caused warning
  // about exhausted deps but worked, but to fix the lint
  // we need to add getMovies into deps array, then we will got
  // inifinite loop, since getMovies getting change every call
  const memoizeGetMovies = useCallback(getMovies, [])
  useEffect(() => {
    memoizeGetMovies({query, size: 10, page: 0})
  },[query, memoizeGetMovies])

  return (
    !loading ? (<Box flex>
      <ResponsiveGrid columns={columns} rows='small' gap='xsmall'>
        { movies && movies.map(m => <Item movie={m} key={m.id} />)}
      </ResponsiveGrid>
    </Box>) : (
      <Box flex>
        <Run size='large'/>
      </Box>
    )
  )
}

export default MovieList