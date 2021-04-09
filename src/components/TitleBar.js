import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './titlebar.css'

const TitleBar = () => {
  return (
    <div>
      <Row className='titlebar'>
        <Col lg={true}>1MUSICAVE | Having Fun While Business Gets Done!</Col>
        <Col className='social-icons' lg={true}>
          <i className='fa fa-instagram'></i>          
          <i className='fa fa-youtube'></i>
        </Col>
      </Row>
    </div>
  )
}

export default TitleBar
