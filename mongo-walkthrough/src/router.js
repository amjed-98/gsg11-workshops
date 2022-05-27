const { createPost, findAllPosts, deleteAllPosts } = require('../database/queries/posts');
const { findAll } = require('../database/queries/users');
const Post = require('../database/models/Post');

const router = async ({ url, method }, res) => {
  if (url === '/donors') {
    const posts = await findAll();
    res.end(posts);
  }
  if (url === '/patients') res.end('hello patients');
  if (url === '/blood-banks') res.end('hello blood-banks');
};

module.exports = router;
