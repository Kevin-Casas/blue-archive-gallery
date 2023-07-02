import React, { Fragment } from 'react';
import Student from './Student';
import {v4 as uuid} from 'uuid';

const Roster = ({roster}) => {
  return (  
    <Fragment>

      {roster.map(student => (
        <Student
        key={uuid()}
        student ={student}
        />
      ))}
    </Fragment>
  );
}
 
export default Roster;