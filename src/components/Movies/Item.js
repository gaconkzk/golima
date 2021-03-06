import React from 'react'
import { Box, Stack, Image, Text, Avatar, ThemeContext } from 'grommet'

const bg=(p) => {
  switch (p) {
    case 'PM':
      return '#FF2233'
    default: 
      return '#553322'
  }
}

const Item = ({movie, ...props}) => {
  return (
    <Box align='start' justify='center' overflow='hidden' round='small' as='a' href={`#/movies/${movie.hash}`}>
      <Stack anchor='bottom-left' guidingChild='first' fill margin={{ bottom: '20px'}}>
        <Image src={movie.thumbnail} fit='cover' fill/>
        <Avatar background={bg(movie.provider)} margin={{top: '5px', left: '5px'}} size='small'>
          {movie.provider}
        </Avatar>
        <ThemeContext.Extend value={{
          text: {
            extend: {
              'text-shadow': '2px 2px #000000',
              backgroundColor: '#224433',
              backgroundOpacity: '3'
            }}
        }}>
          <Text as='span' margin={{ left: '25px' }} weight='bold' size='1rem' color='white' shadow>{movie.title}</Text>
        </ThemeContext.Extend>
      </Stack>
    </Box>
  )
}

export default Item