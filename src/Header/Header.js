import React from 'react';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <div className='all'>
         <img src="./recursos/logo.png" alt= "logo" className='logo'></img>
      <div className='menu'>
  <Navbar expand="lg">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/" className='menu1'>Menu1</Nav.Link>
            <Nav.Link href="/" className='menu2'>Menu2</Nav.Link>
            <Nav.Link href="/" className='menu3'>Menu3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default Header;
