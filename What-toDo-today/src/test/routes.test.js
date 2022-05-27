const request = require('supertest');
const app = require('../app');
const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');

beforeAll(dbBuild);

test('/signUp: should return 200 ', (done) => {
  request(app)
    .get('/signUp')
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

test('/signUp: should return 302 and content_type text/html', (done) => {
  request(app)
    .post('/signUp')
    .send({
      name: 'amjad',
      email: 'validEmail@gmail.com',
      password: '11111111',
      confirmsPassword: '11111111',
    })
    .expect(201)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

describe('GET /login endpoints', () => {
  test('/login: should return 200 and content_type text/html', (done) => {
    request(app)
      .get('/login')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});

describe('POST /login endpoints', () => {
  // * valid email and password
  test('/login: Should return 302 and redirect to (todo page) when email and password is valid', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'validEmail@gmail.com', password: '11111111' })
      .expect(302)
      .expect('content-type', 'text/plain; charset=utf-8')
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });

  // * invalid email
  test('/login: should return 404 and msg email not found when email is not found', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'invalidEmail@gmail.com', password: '11111111' })
      .expect(404)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) return done(err);

        const expectedMsg = 'The email you entered isn’t connected to an account. please Create an account';
        expect(res.body.msg).toEqual(expectedMsg);

        return done();
      });
  });
  // * valid email but invalid password
  test('/login: should return 401 and msg password is invalid', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'validEmail@gmail.com', password: 'wrongPassword' })
      .expect(401)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((err, { body }) => {
        if (err) return done(err);

        const expectedMsg = 'The password you’ve entered is incorrect';
        expect(body.msg).toEqual(expectedMsg);

        return done();
      });
  });
});

afterAll(() => connection.end());
