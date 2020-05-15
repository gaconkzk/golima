import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactJWPlayer from 'react-jw-player'

import axios from 'axios'
import { MovieContext } from './MovieContext'

const Details = (props) => {
  let { id } = useParams('id')
  const [ playlist, setPlaylist ] = useState([])
  const [ movie, setMovie ] = useState({})

  const { movies } = useContext(MovieContext)

  useEffect(() => {
    axios
      .get(`/api/info?id=${id}`)
      .then(response => {
        let movie = response.data
        setMovie(movie)
        let info = movies.find(m => m.id === movie.id)
        console.log(movie, info)
      })
      .catch(err => {
        
      })
      .finally(() => {
        
      })
  }, [id])

  useEffect(() => {
    if (movie) {
      setPlaylist([{
        file: movie.url,
        image: movie.thumbnail
        // onXhrOpen: (xhr, url) => {
        //   xhr.setRequestHeader('referer', movie.referer)
        // }
      }])
    }
  }, [movie])
  return (
    <div>hello, watching {id}
      <ReactJWPlayer playerId='flinema-player'
        playerScript='https://cdn.jwplayer.com/libraries/ZN2NyITe.js'
        playlist={playlist}
        customProps={{type: movie.type}}/>
    </div>
  )
}

export default Details