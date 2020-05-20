import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Box, Grid, Heading, Stack, Image } from 'grommet'
import { Search } from 'components/Search'
import { MoviesList, MovieDetails } from 'components/Movies'
import MovieContextProvider from 'components/Movies/MovieContext'

const Main = (props) => {
  return (
    <MovieContextProvider>
    <Box background='brand' fill flex>
      <Router basename='/' hashType='slash'>
        <Route exact path='/movies/:id'>
          <MovieDetails/>
        </Route>
        <Route
          exact
          path='/'
          render={() =>
            <Grid
              align='stretch'
              rows={['medium', 'medium', 'auto']}
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
                <Box gridArea='search' align='center' background='brand' fill justify='center'>
                  <Search/>
                </Box>
                <Box gridArea='result'>
                    <Router basename='/'>
                      <Switch>
                        <Route
                          exact
                          path='/'
                          render={()=> (<MoviesList/>)}
                        />
                      </Switch>
                    </Router>
                </Box>
            </Grid>
            }/>
      </Router>
    </Box>
    </MovieContextProvider>
  )
}

export default Main