const request = require('supertest');

const app = require('../app');

//Fill this with many many tests YAY!! 😜😩

const dummyUser = {
  cohort: 11,
  id: 1,
  firstname: 'Abdullah',
  surname: 'Chaudry',
};

const hobby = { hobby: 'late night sql' };
const superpower = { superpower: 'linting wizard' };

describe('should test get routes', () => {
  test('GET/facsters/ - should respond with 200 and array of users', (done) => {
    request(app)
      .get('/facsters')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(404);
        else {
          expect(Array.isArray(res.body)).toBeTruthy();
        }

        done();
      });
  });

  test('GET/facsters/:name - should respond with 200 and object of single user', (done) => {
    request(app)
      .get('/facsters/Abdullah')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body).toEqual(dummyUser);
        done();
      });
  });

  it('/facsters/:name/hobby - should response with 200 and object includes hobbies', (done) => {
    request(app)
      .get('/facsters/Abdullah/hobby')
      .expect(200)
      .expect('Content-Type', '/json/')
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body).toEqual({ ...dummyUser, ...hobby });
        done();
      });
  });
});

it('/facsters/:name/superpower - should response with 200 and object includes superpower', (done) => {
  request(app)
    .get('/facsters/Abdullah/superpower')
    .expect(200)
    .expect('Content-Type', '/json/')
    .end((err, res) => {
      if (err) return done(err);

      expect(res.body).toEqual({ ...dummyUser, ...superpower });
      done();
    });
});

test('POST/facsters/:name - should respond with 201 and object', (done) => {
  request(app)
    .post('/facster/new')
    .send(dummyUser)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      const id = res.body.id;

      expect(res.body).toEqual({ ...dummyUser, id });

      done();
    });
});
