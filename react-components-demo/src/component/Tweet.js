import React from 'react';

export default function Tweet({ name, username, date, msg }) {
  return (
    <div>
      <p>{name}</p>
      <span>{date}</span>
      <p>{username}</p>
      <p>{msg}</p>
    </div>
  );
}
