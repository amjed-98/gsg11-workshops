// queries/posts.js
const Post = require('../models/Post');

const createPost = ({ content, author }) => {
  return Post.create({ content, author });
};

const findAllPosts = () => {
  return Post.find();
};

const deleteAllPosts = () => {
  return Post.deleteMany({});
};

module.exports = {
  createPost,
  findAllPosts,
  deleteAllPosts,
};
