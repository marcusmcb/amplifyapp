import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

import './titlecard.css'

const TitleCard = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>1MusicAve</h1>
          <p>
            having fun while business gets done!
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default TitleCard
