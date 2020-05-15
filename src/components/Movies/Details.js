import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactJWPlayer from 'react-jw-player'

import axios from 'axios'

const Details = (props) => {
  let { id } = useParams('id')
  const [ playlist, setPlaylist ] = useState([])
  const [ movie, setMovie ] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:3100/api/info?id=${id}`)
      .then(response => {
        setMovie(response.data)
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
        onXhrOpen: (xhr, url) => {
          xhr.setRequestHeader('referer', movie.referer)
        }
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