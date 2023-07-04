import React, { Fragment } from 'react';
import Student from './Student';
import { Container, Row, Col } from 'react-bootstrap';

const Roster = ({roster}) => {
  return (  
    <Fragment>
      <Container>
        <Row
        className='row-cols-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 justify-content-center'>

        {roster.map(student => (
          <Col className='mt-4 mb-5'>
          <Student
          key={student._id}
          student ={student}
          />
          </Col>
        ))}

        </Row>
       
      </Container>
      
    </Fragment>
  );
}
 
export default Roster;