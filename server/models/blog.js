const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  blogNumber: { type: Number, required: true, unique: true },
  title: { type: String, required: true, default: "New Blog Post" },
  author: { type: String, required: true, default: process.env.DB_USER_DEFAULT_AUTHOR },
  readTime: { type: Number, required: true, default: 2 },
  likesCount: { type: Number, required: true, default: 0 },
  date: { type: Date, required: true, default: Date.now },
  content: [{
    heading: { type: String },
    body: { type: String }
  }]
});

module.exports = mongoose.model('Blog', blogSchema);