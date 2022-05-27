// models/Post.js
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Post = model('Post', postSchema);

module.exports = Post;
