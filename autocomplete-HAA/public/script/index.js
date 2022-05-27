/* eslint-disable no-unused-vars */
const fetch = (url, method, cb) => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    cb(JSON.parse(xhr.responseText));
  };

  xhr.open(method, url, true);
  xhr.send();
};
