import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactJWPlayer from 'react-jw-player'

import { Main, Box } from 'grommet'

import axios from 'axios'

const Details = (props) => {
  let { id } = useParams('id')

  const [ playlist, setPlaylist ] = useState(null)
  const [ movie, setMovie ] = useState({})

  const [ error, setError ] = useState({})

  useEffect(() => {
    axios
      .get(`/api/info?id=${id}`)
      .then(response => {
        let movie = response.data
        if (error.msg) {
          setError({})
        }
        setMovie(movie)
      })
      .catch(err => {
        if (err.response.status === 412) {
          setError(err.response.data)
        }
        setMovie({})
      })
      .finally(() => {
        
      })
  }, [id, error.msg])

  useEffect(() => {
    if (movie) {
      setPlaylist([{
        title: movie.title,
        description: movie.description,
        file: movie.url,
        image: movie.previewUrl
      }])
    } else {
      setPlaylist([])
    }
  }, [movie])
  return (
    movie && movie.url ? <Main direction='column' fill align='center'>
        <Box flex fill width={{ min: '500px', max: '1024px' }}>
          <ReactJWPlayer playerId='flinema-player'
            playerScript='https://cdn.jwplayer.com/libraries/ZN2NyITe.js'
            image={movie.previewUrl || ''}
            playlist={playlist}
            customProps={{
              title: movie.title,
              type: movie.type,
              height: movie.resolution || '100%'
            }}/>
        </Box>
        { movie.isSeries &&(
        <React.Fragment>
          <Box>current: tập {movie.number}, {movie.episodeId}</Box>
          <div>
            { movie.episodes && movie.episodes.map(me => 
              <a key={me.episodeId} href={`#/movies/${me.hash}`}>
                {me.episodeId === movie.episodeId ? 'current ------>' : ''}
                {me.number} : {me.episodeId} <br/>
              </a>
            )}
          </div>
        </React.Fragment>
        )}
    </Main> : (error && error.msg) ? <div> Lỗi rồi mấy thým ơi, Kím phim khác coi nha ahihi ... </div> : <div> waiting ... </div>
  )
}

export default Details