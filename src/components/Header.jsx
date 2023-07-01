import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (  
    <Fragment>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand 
          href="#home"
          className=''>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blue_Archive_EN_logo.svg/245px-Blue_Archive_EN_logo.svg.png" 
            alt="Logo"
            width='160px'
            height='58px'
            />
            <Navbar.Text
            className='text-primary h5 fw-bold'
            >Gallery
            </Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}
 
export default Header;