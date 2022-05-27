// eslint-disable-next-line no-unused-vars
const fetchData = (method, url, data) => {
  if (!data) return fetch(url).then((res) => res.json());

  return fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
