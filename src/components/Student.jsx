import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Student = ({student}) => {
  return (  
    <Fragment>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={student.photoUrl} />
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
        </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{student.school} <img src={student.imageSchool} alt="School Logo" /> </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link 
        href="https://safebooru.org/index.php?page=post&s=list&tags=official_art+neru_%28blue_archive%29+"
        target='_blank'
        >Arte oficial</Card.Link>
        <Card.Link 
        href="https://safebooru.org/index.php?page=post&s=list&tags=neru_%28blue_archive%29"
        target='_blank'
        >Todo el arte</Card.Link>
      </Card.Body>
     </Card>
      
    </Fragment>
  );
}
 
export default Student;