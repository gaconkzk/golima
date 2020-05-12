import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";

import { Box, Grid, Heading, Stack, Image } from 'grommet'
import { Search } from 'components/Search'
import { MoviesList } from 'components/Movies'
import MovieContextProvider from 'components/Movies/MovieContext'

const Main = (props) => {
  return (
    <Box background='brand' fill flex>
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
          <Stack anchor='center' guidingChild='first' fill>
            <Image fill opacity='medium' fit='cover' src='https://sites.google.com/site/subjectguidewomeninhorrorfilms/_/rsrc/1430194528627/reference-books/evil-dead-banner.png'/>
            <Heading color='#ef2331' margin={{top: '-100px'}}>TAKE your eyEs off me!!!!</Heading>
          </Stack>
        </Box>
        <MovieContextProvider>
          <Box gridArea='search' align='center' background='brand'>
            <Search/>
          </Box>
          <Box gridArea='result'>
              <HashRouter basename='/'>
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={()=> (<MoviesList/>)}
                  />
                </Switch>
              </HashRouter>
          </Box>
        </MovieContextProvider>
      </Grid>
    </Box>
  )
}

export default Main