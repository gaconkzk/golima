import React from 'react'
import { Box, Heading } from 'grommet'

import ResponsiveGrid from 'components/ResponsiveGrid'

// columns, rows and areas are for Grid with a known number of contents / boxes.

// If the size is small, we only see 1 column
// If the size is medium, we only see 3 columns
// If the size is either large or xlarge, we see 4 or 5 columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto", "auto", "auto"]
}

const movies = [
  'test fhg1',
  'test3231',
  'tescbcvt1',
  'te345st1',
  'test451',
  'tes4t1',
  'testdhjh1',
  'test31',
  'thnestsd1',
  'tesbvt1',
  'tes2t1',
  'teaefbvnst1',
  'testasf1',
  'tes t1',
  'testcxfa1'
]

// Create box for each movie
const listMoviesBoxes = movies.map(movieName => (
  <Box
    elevation="large"
    key={movieName}
    background="light-3"
    flex={false}
    justify="center"
    align="center"
    round='small'
    margin={{ right: '10px', left: '5px', top: '5px' }}
  >
    <Heading level={2}>{movieName}</Heading>
  </Box>
))

const MovieList = (props) => {
  return (
    <Box flex>
      <ResponsiveGrid columns={columns} rows='small' gap='xsmall'>
        {listMoviesBoxes}
      </ResponsiveGrid>
    </Box>
  )
}

export default MovieList