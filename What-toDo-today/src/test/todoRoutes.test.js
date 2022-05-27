const request = require('supertest');
const app = require('../app');
const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');

beforeAll(dbBuild);

describe('/todo Routes ', () => {
  test('PATCH /TODO:id, should return 202 and the edited note ', (done) => {
    request(app)
      .patch('/todo/1')
      .send({ note: 'play with friends' })
      .expect(202)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((err, { body: { note } }) => {
        if (err) return done(err);

        const expected = 'play with friends';
        expect(note).toEqual(expected);

        return done();
      });
  });

  test('DELETE /todo:id. Should return 202  when delete todo task and return message', (done) => {
    request(app)
      .delete('/todo/1')
      .expect(202)
      .expect('content-type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) return done(err);
        const expectedMsg = 'todo Deleted Successfully';
        expect(res.body.msg).toEqual(expectedMsg);
        return done();
      });
  });
});

afterAll(() => connection.end());
