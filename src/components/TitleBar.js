import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './titlebar.css'

const TitleBar = () => {
  return (
    <div>
      <Row className='titlebar'>
        <Col lg={true}>1MUSICAVE | Having Fun While Business Gets Done!</Col>        
        <Col lg={true}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/1musicave/'
          >
            <i className='fa fa-instagram social-icons'></i>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.youtube.com/channel/UCxtK7T8OSlU40VmZ7fjZeWw'
          >
            <i className='fa fa-youtube social-icons'></i>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/1musicave/'
          >
            <i className='fa fa-twitter social-icons'></i>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default TitleBar
