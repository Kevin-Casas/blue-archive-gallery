import React, { Fragment, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Searchbar = ({editName, consultarAPI, randomAPI, randomAPIX6}) => {

  //Iniciamos local storage para estudiantes
  let nameInForm = JSON.parse(localStorage.getItem('studentName'));
  if(!nameInForm) {
    nameInForm = ''
  };

  const [studentName, editStudentName] = useState(nameInForm);

  //Hook 
  useEffect(() => {
    localStorage.setItem('studentName', JSON.stringify(studentName))
  });
  

  //Cambiar el nombre a buscar
  const handleChange = (e) => {
    editName(e.target.value);
    editStudentName(e.target.value);
  };

  return (  
    <Fragment>
      
      <Container>
        <Navbar 
        className="bg-white mt-5 rounded rounded-5 py-2 ps-4">
          <Form 
          className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={studentName}
            />
            <Button 
            variant="outline-primary"
            className='mx-3'
            onClick={() => consultarAPI()}
            >Search</Button>
          </Form>

          <Button 
          variant="outline-primary"
          className='mx-3'
          onClick={() => randomAPI()}
          >Random</Button>

          <Button 
          variant="outline-primary"
          className='mx-3 text-nowrap'
          onClick={() => randomAPIX6()}
          >Random X6</Button>

        </Navbar>
      </Container>
      
    </Fragment>
  );
}
 
export default Searchbar;