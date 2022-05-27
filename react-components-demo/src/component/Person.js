import React from 'react';
import Hobies from './Hobies';
const Person = ({ name, age, hobies }) => {
  let text = 'you must be over 23';
  let username = name;
  if (age > 23) {
    text = 'have a drink';
  }

  if (name.length > 8) {
    username = name.slice(0, 6);
  }
  return (
    <React.Fragment>
      <h3>{username}</h3>
      <p>Learn more about this person</p>
      {age >= 23 && <h3>you must be over 23</h3>}
      <Hobies hobies={hobies}></Hobies>
    </React.Fragment>
  );
};

export default Person;
