const connection = require('../database/connection');
const { createUser, deleteAll, findOne } = require('../database/queries/users');

const user = {
  firstName: 'Farah',
  lastName: 'Zaqout',
  age: 28,
  city: 'Gaza',
};
test('hello', () => {
  // expect.assertions(2);

  // insert new user
  return deleteAll()
    .then(() => createUser(user))
    .catch((err) => {
      console.log(err);
      expect(err.name).toBe('MongoServerError');
      expect(err.code).toBe(11000);
    });
});

it('should find user by name', () => {
  return findOne('farah').then(({ firstName, lastName }) => {
    expect(firstName).toEqual('Farah');
    expect(lastName).toEqual('Zaqout');
  });
});
afterAll(() => connection.close());
