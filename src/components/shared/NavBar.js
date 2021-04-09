import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './navbar.css'

const NavBar = () => {
  return (
    <div>
      <Row className="navbar-elements">
        <Col lg={true}>Dance Radio Top 50</Col>
        <Col lg={true}>Dance Radio Adds</Col>
        <Col lg={true}>Radio Picks</Col>
        <Col lg={true}>Mixshow Picks</Col>
        <Col lg={true}>Music News</Col>
        <Col lg={true}>Media</Col>
      </Row>
    </div>
  )
}

export default NavBar
