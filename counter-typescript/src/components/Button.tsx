import React from 'react';

interface Props {
  action: () => void;
  children: string;
}

const Button = ({ action, children }: Props) => {
  return (
    <button
      style={{
        marginLeft: '1rem',
        padding: '.5rem 1rem',
        border: 'none',
        cursor: 'pointer',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.1rem',
      }}
      onClick={action}>
      {children}
    </button>
  );
};

export default Button;
