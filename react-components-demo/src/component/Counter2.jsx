import React, { useState, useEffect, Fragment } from 'react';

const Counter2 = () => {
  const [giffy, setGiffy] = useState([]);

  const handleGiffy = async (searchTerm) => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=GB2TIpB11wLmKBbNbYZ5b6F9HMYXs38a`,
      );

    const { data } = await res.json();

    setGiffy(data);
  };

  useEffect(() => {
    handleGiffy('car');

    return () => handleGiffy('');
  },[giffy]);

  return (
    <Fragment>
      <input onChange={(e) => handleGiffy(e.target.value)} />

      {giffy.slice(2).map(
        ({
          images: {
            original: { url },
          },
        }) => (
          <img src={url} alt='amjad' />
        ),
      )}
    </Fragment>
  );
};

export default Counter2;
// https://randomuser.me/api