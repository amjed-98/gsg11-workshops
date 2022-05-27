const connection = require('../server/database/config/connection');
const dbBuild = require('../server/database/config/build');
const getData = require('../server/database/queries/getData');
const postData = require('../server/database/queries/postData');

beforeAll(() => {
  return dbBuild();
});

afterAll(() => {
  return connection.end();
});

const dummyUsers = [
  { id: 1, location: 'Gaza', name: 'Ali' },
  { id: 2, location: 'Canada', name: 'Mo' },
  { id: 3, location: 'USA', name: 'John' },
];

it('should return users data', (done) => {
  getData()
    .then((data) => {
      expect(data.rows).toEqual(dummyUsers);
      done();
    })
    .catch(done);
});

const dummyUser = { name: 'gollami', location: 'canada' };

it('should return the user that was added', (done) => {
  postData(dummyUser)
    .then((data) => {
      expect(data.rows[0]).toEqual(dummyUser);
      done();
    })
    .catch(done);
});
