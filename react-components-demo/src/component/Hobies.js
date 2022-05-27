import React from 'react';

const Hobies = ({ hobies }) => {
  return (
    <div>
      {hobies.map((hoby) => {
        return <li>{hoby}</li>;
      })}
    </div>
  );
};

export default Hobies;
