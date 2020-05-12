import React from 'react'
import { Box, Stack, Image, Text, Avatar } from 'grommet'

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
    <Box align='start' justify='center' overflow='hidden' round='small' elevation='small'>
      <Stack anchor='top-left' guidingChild='first' fill>
        <Image src={movie.thumbnail} fit='cover' fill/>
        <Text as='span' margin={{ left: '25px' }} weight='bold' size='1rem'>{movie.title}</Text>
        <Avatar background={bg(movie.provider)} margin={{top: '5px', left: '5px'}} size='small'>
          {movie.provider}
        </Avatar>
      </Stack>
    </Box>
  )
}

export default Item