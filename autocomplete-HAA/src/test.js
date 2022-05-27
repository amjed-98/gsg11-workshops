/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const supertest = require('supertest');
const routes = require('./routes');

// eslint-disable-next-line no-undef
describe('testing end points', () => {
  // eslint-disable-next-line no-undef

  // Home route
  test('home route should respond with html ', (done) => {
    supertest(routes)
      .get('/')
      .expect('Content-Type', 'text/html')
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });

  // styles route
  // eslint-disable-next-line no-undef
  test('home route should respond with css', (done) => {
    supertest(routes)
      .get('/style.css')
      .expect('Content-Type', 'text/css')
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });

  // Cars Route
  // eslint-disable-next-line no-undef
  test('should /cars route should respond with json', (done) => {
    supertest(routes)
      .get('/cars')
      .expect('Content-Type', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });

  // cars/images route`
  // eslint-disable-next-line no-undef
  test('should api request respond with json', (done) => {
    supertest(routes)
      .get('/cars/images')
      .expect('Content-Type', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });

  // error route
  // eslint-disable-next-line no-undef
  test('unKnown routes should respond with 404', (done) => {
    supertest(routes)
      .get('/amjad')
      .expect(404)
      .expect('Content-Type', 'text/html')
      .end(done);
  });
});
