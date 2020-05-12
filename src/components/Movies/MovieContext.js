import React, { createContext, useState } from 'react'
import axios from 'axios'

export const MovieContext = createContext()

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('glass')

  const getMovies = ({query, size, page}) => {
    if (!query || !query.length) {
      setLoading(false)
      return
    }
    setLoading(true)

    axios
      .get(`http://localhost:3100/api/search?q=${query}`)
      .then(response => {
        setMovies(response.data)
      })
      .catch(err => {
        console.log('Error get movies', err)
        setMovies([])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <MovieContext.Provider value={{ movies, loading, getMovies, query, setQuery }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider