const path = require('path');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use((req, res, next) => {
  let allData = '';
  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    const params = new URLSearchParams(allData);
    const name = params.get('name');
    const email = params.get('email');
    req.body = { name, email };
    next();
  });
});

app.post('/login', (req, res, next) => {
  // from here try to get data from request.body, try to handle in separate middleware
  const { body } = req;

  req.user = body;

  res.redirect('/login');

  next();
});

app.use((req, res, next) => {
  if (req.user.name === 'amjad') {
    console.log('wlecone amjad');
  }

  console.log('not authorized');
});
// STEP2: create a middleware to catch request data and modify on request object

// STEP1: create a logger to log millisecond timestamp after each request

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
