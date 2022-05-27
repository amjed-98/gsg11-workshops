// app entry point
// use express.Router() class and load it with controllers
const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
