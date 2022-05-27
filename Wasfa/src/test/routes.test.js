const request = require('supertest');
const app = require('../app');

describe('testing GET Methods', () => {
  it('/search-?recipe route should return 200 & htmlPage response', (done) => {
    request(app)
      .get('/search-recipe')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((err, res) => {
        if (err) return done(err);

        expect(res.statusCode).toEqual(200);
        return done();
      });
  });
});
describe('wrong route', () => {
  it('/test 404', (done) => {
    request(app)
      .get('/f')
      .expect(404)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('test GET recpies method ', () => {
  it('/recipe router should return 200 & json', (done) => {
    request(app)
      .get('/recipe')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('testing GET Methods', () => {
  it('/search-?recipe route should return 200 & htmlPage response', (done) => {
    request(app)
      .post('/search-recipe')
      .send({ searchTerm: 'burger' })
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('testing post Methods', () => {
  it('/search-?recipe route should return 200 & htmlPage response', (done) => {
    request(app)
      .post('/search-recipe')
      .send({ search: 'burger' })
      .expect(400)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
