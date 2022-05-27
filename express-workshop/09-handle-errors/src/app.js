const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use((req, res) => {
//   res.status(500).send('4040');
// });

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '40d4.html'));
});

app.use((err, req, res, next) => {
  res.status(504).sendFile(path.join(__dirname, '..', 'public', '500.html'));
});
// app.get('/fruit', (req, res) => {
// call an undefined function in this handler to cause an error

//   res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'), (err) => {
//     if (err) {
//       res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
//     }
//   });
// });

// app.post('/fruit', (req, res) => {
//   console.log(req.body.name, req.body.image_url);
//   res.redirect('/fruit');
// });

// app.get('*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'), (err) => {
//     if (err) {
//       res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
//     }
//   });
// });

// create a 404 middleware sending the '404.html' file

// create a 500 middleware sending the '500.html' file

app.listen(4000, () => {
  console.log('App running on port 4000');
});
