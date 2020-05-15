import React, { createContext, useState } from 'react'
import axios from 'axios'

export const MovieContext = createContext()

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('glass')
  const [error, setError] = useState(null)

  const getMovies = ({query, size, page}) => {
    if (!query || !query.length) {
      setLoading(false)
      return
    }
    setLoading(true)

    axios
      .get(`http://192.168.88.102:3100/api/search?q=${query}`)
      .then(response => {
        if (error) {
          setError(null)
        }
        setMovies(response.data)
      })
      .catch(err => {
        setError(err)
        setMovies([])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <MovieContext.Provider value={{ movies, loading, getMovies, query, setQuery, error }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider