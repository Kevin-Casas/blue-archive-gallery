import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (  
    <Fragment>

      <Navbar 
      className='bg-white'>
        <Container>

          <Navbar.Brand 
          href="#home"
          ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blue_Archive_EN_logo.svg/245px-Blue_Archive_EN_logo.svg.png" 
            alt="Logo"
            width='160px'
            height='58px'
          />
          <Navbar.Text
          className='text-primary h5 fw-bold'
          >Gallery</Navbar.Text>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              <a 
              href="https://api-blue-archive.vercel.app/"
              target='_blank'
              className='text-primary bg- h5 fw-bold'
              >Powered by BLUE ARCHIVE API</a>
            </Navbar.Text>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      
    </Fragment>
  );
}
 
export default Header;