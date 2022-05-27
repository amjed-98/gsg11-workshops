import React from 'react';
import { ClicksPropsInterface } from './Interfaces';

const Clicks = ({ clicks }: ClicksPropsInterface) => {
  return (
    <span
      style={{ color: 'red', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'cursive' }}>
      {clicks}
    </span>
  );
};

export default Clicks;
