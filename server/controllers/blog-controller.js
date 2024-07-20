const { validationResult } = require('express-validator');

const fs = require('fs');
const HttpError = require('../models/http-error');
const Blog = require('../models/blog');

// GET
const getAllBlogs = async (req, res, next) => {
  let allBlogs = await Blog.find();
  try {
    allBlogs = await Blog.find();
    if (!allBlogs) {
      return res.json({ok:-1, message:'No blogs found'});
    }
  } catch (error) {
    // Log the error but do not stop processing the rest of the user IDs
    return res.json({ok:-1, message:'Error finding blogs:'});
  }

  return res.json({ok:1, message: "Successfully fetched all blogs!" });
}


// POST
const AddBlog = async (req, res, next) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  let { blogNumber, title, author, readTime, content } = req.body;

  // Find a unique blogNumber
  let blogExists = true;
  while (blogExists) {
    const existingBlog = await Blog.findOne({ blogNumber: blogNumber });
    if (existingBlog) {
      blogNumber++;
    } else {
      blogExists = false;
    }
  }

  const createdBlog = new Blog({
    blogNumber: blogNumber,
    title: title,
    author: author,
    readTime: readTime,
    content: content
  });

  try {
    await createdBlog.save();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: -1, message: 'Some error occurred!' });
  }

  res.status(201).json({ ok: 1, blog: createdBlog, message: 'Created a new blog successfully!' });
};

module.exports = {
  getAllBlogs,
  AddBlog
  // postEmployeesForMonth,
  // patchEmployeesForMonth,
  // deleteEmployeesForMonth,
};

// {
//   "title": "example blog title",
//   "author": "Harry Potter",
//   "readTime": 5,
//   "content": [
//       {
//           "heading": "1",
//           "body": "111111111111"
//       }, {
//           "heading": "2",
//           "body": "222 222 22222 222 22 2222"
//       }
//   ]
// }