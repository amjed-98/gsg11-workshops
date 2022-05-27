const handleError = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  return res.end('<h1>Page Not Found</h1>');
};

module.exports = handleError;
