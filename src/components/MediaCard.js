import React from 'react'
import { Row } from 'react-bootstrap'

import './mediacard.css'

const MediaCard = () => {
  return (
    <div>
        <Row  className='media-card'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/2Q0TPOFh4vM'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/5pNWSghrfW8'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      </Row>
    </div>
  )
}

export default MediaCard
