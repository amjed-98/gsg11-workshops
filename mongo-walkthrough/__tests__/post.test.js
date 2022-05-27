// posts.test.js
const connection = require('../database/connection');
const { deleteAllPosts, createPost } = require('../database/queries/posts');
const { createUser, deleteAll } = require('../database/queries/users');

test('hello', () => {
  const user = {
    firstName: 'Farah',
    lastName: 'Zaqout',
    age: 28,
    city: 'Gaza',
  };

  // insert new user
  return deleteAll()
    .then(() => deleteAllPosts())
    .then(() => createUser(user))
    .then((newUser) =>
      createPost({
        content: 'Hello, G11',
        author: newUser._id,
      }),
    )
    .then((res) => {
      console.log(res);
      expect(res.content).toBe('Hello, G11');
      expect(res).toHaveProperty('author');
    });
});

afterAll(() => connection.close());
