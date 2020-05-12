import React from 'react'

import { Box, Grid, Heading, Stack, Image } from 'grommet'
import { Search } from 'components/Search'
import { MoviesList } from 'components/Movies'

const Main = (props) => {
  return (
    <Box flex>
      <Grid
        align='stretch'
        rows={['medium', 'xsmall', 'auto']}
        columns={['auto', 'flex', 'auto']}
        gap='small'
        areas={[
          { name: 'banner', start: [0, 0], end: [2, 0]},
          { name: 'search', start: [1, 1], end: [1, 1]},
          { name: 'result', start: [0, 2], end: [2, 2]}
        ]}
      >
        <Box gridArea='banner' background='brand' align='center' justify='center' elevation='medium' overflow='hidden'>
          <Stack anchor='center' guidingChild='last' fill>
            <Heading color='#ef2331' margin={{top: '-100px'}}>Get your eyes of me!!!!</Heading>
            <Image fill opacity='medium' fit='cover' src='https://sites.google.com/site/subjectguidewomeninhorrorfilms/_/rsrc/1430194528627/reference-books/evil-dead-banner.png'/>
          </Stack>
        </Box>
        <Box gridArea='search' align='center'>
          <Search/>
        </Box>
        <Box gridArea='result'>
          <MoviesList/>
        </Box>
      </Grid>
    </Box>
  )
}

export default Main