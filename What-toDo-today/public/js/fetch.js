const request = (url, method, data) => {
  const options = {
    method,
    Headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  };

  return fetch(url, options);
};
