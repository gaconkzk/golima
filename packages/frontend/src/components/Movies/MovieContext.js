import React, { createContext, useState } from 'react'
import axios from 'axios'

export const MovieContext = createContext()

const params = (query) => {
  return Object.keys(query)
  .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
    .join('&')
}

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState({q: 'glass', p: 1})
  const [error, setError] = useState(null)

  const [types, setTypes] = useState({})

  const getTypes = (({provider}) => {
    axios.get('/api/types')
      .then(res => {
        setTypes(res.data)
      })
      .catch(err => {
        setTypes({})
      })
  })

  const getMovies = ({query, size, page}) => {
    if (!query) {
      setLoading(false)
      return
    }
    setLoading(true)

    axios
      .get(`/api/search?${params(query)}`)
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
    <MovieContext.Provider value={{ movies, loading, getMovies, query, setQuery, error, types, getTypes }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
