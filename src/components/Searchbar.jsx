import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Searchbar = ({randomAPI, randomAPIX10}) => {


  return (  
    <Fragment>
      
      <Container>
        <Navbar 
        className="bg-white mt-5 rounded rounded-5 py-2 ps-4">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button 
            variant="outline-primary"
            className='mx-3'
            >Search</Button>
            <Button 
            variant="outline-primary"
            className='mx-3'
            onClick={() => randomAPI()}
            >Random</Button>
            <Button 
            variant="outline-primary"
            className='mx-3 text-nowrap'
            onClick={() => randomAPIX10()}
            >Random X10</Button>
          </Form>
        </Navbar>
      </Container>
      
    </Fragment>
  );
}
 
export default Searchbar;