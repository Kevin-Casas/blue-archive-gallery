import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Student = ({student}) => {

  //Links modificados
  const official_art = "https://safebooru.org/index.php?page=post&s=list&tags=official_art+" + student.name + "_%28blue_archive%29"
  const all_art = "https://safebooru.org/index.php?page=post&s=list&tags=" + student.name + "_%28blue_archive%29"

  //Link safebooru
  const safebooruImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABDlBMVEVERER5aGaEfneDg3x/dW+Be3SDemeDgHJ5aV9/eHCEf2+Dcl+CgX/r0sv+/vL/9+nsyL775MTy07bqwrP27dT/9db92rX41K3rx7d5b2z79On++uv859z90Kn53rjkr5325sv62c3qr5n2xZ/wuZ/utafluaT2yqnhu6ru3Mzvz7zwyLT93sz1wLLZnYjpuZXgvKD91cH+zLjpopqDbGPXn5rKk5PSjo+Ad2uCZF3YqaNxXXQ+PGGoe4MyNmeVcHlyUU9+aIUiK2KMd5HStrllSkBhQUOkmLczOHR6dZfXxsd6c4txXlCGha7d1tVrbqhESYuWkqTxt7K1sL+FhanZrK7EhH0wHR1hOT5wV1Qw0Yt2AAAAyklEQVR4ATRMNVbFUBScSe57X+I59DgbwK1k19DjWlHh7hBXfKpxgv9oTKLOaPPH+/cjcRjBZton827SVhBEcCKEJDU7iXUpr4FHvzUYo9TdLnNp/Q4IwGw11IsSTtVgmTlAmfnk0wDnSYKvAoo2GnNDOqy/RQnlNqhkWTRTaJZAqdu8b1IK6RFyAWCEbZc3BlwopWHb2Fa2rMKwj6y77poTRVbnuGmGwJVgD118n7LM3E4jOO21Cq0uCZUJICE8fpRAB1AT4OeWAwDzgkORPH0nmwAAAABJRU5ErkJggg=="
  
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
        href= {official_art}
        target='_blank'
        ><img 
        src={safebooruImg}
        alt="Safebooru" 
        />Arte oficial</Card.Link>
        
        <Card.Link 
        href={all_art}
        target='_blank'
        ><img src={safebooruImg} 
        alt="Safebooru" 
        />Todo</Card.Link>
      </Card.Body>
      
     </Card>
      
    </Fragment>
  );
}
 
export default Student;