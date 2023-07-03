import React, { Fragment } from 'react';
import Student from './Student';
import {v4 as uuid} from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';

const Roster = ({roster}) => {
  return (  
    <Fragment>
      <Container>
        <Row
        className='row-cols-3 justify-content-center'>

        {roster.map(student => (
          <Col className='my-5'>
          <Student
          key={uuid()}
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