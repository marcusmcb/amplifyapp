import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>1MusicAve | Having Fun While Business Gets Done</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Radio</Nav.Link>
          <Nav.Link href='#features'>Mixshow</Nav.Link>
          <Nav.Link href='#pricing'>New Music</Nav.Link>
        </Nav>
        
      </Navbar>
    </div>
  )
}

export default NavBar
