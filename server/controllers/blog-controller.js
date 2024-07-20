const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Blog = require('../models/blog');

// GET
const getAllBlogs = async (req, res, next) => {
  const page = parseInt(req.query.page) || 0;
  const blogsPerPage = parseInt(process.env.DB_COUNT_BLOGS_PER_PAGE) || 9;

  try {
    // Find the blogs with pagination
    const allBlogs = await Blog
      .find()
      .skip(page * blogsPerPage)
      .limit(blogsPerPage);

    // Count the total number of blogs for pagination metadata
    const totalBlogs = await Blog.countDocuments();

    if (allBlogs.length === 0) {
      return res.json({ ok: -1, message: 'No blogs found' });
    }

    // Return the paginated blogs along with pagination metadata
    return res.json({
      ok: 1,
      blogs: allBlogs,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / blogsPerPage),
      totalBlogs: totalBlogs,
      message: "Successfully fetched all blogs!"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: -1, message: 'Error finding blogs' });
  }
};

const getBlogByNumber = async(req, res, next) => {
  let bn = req.params['blogNumber'];
  let existingBlog;
  try {
    existingBlog = await Blog.findOne({blogNumber: bn});
    if (!existingBlog) {
      return res.json({ok:-1, message:'No blog found with this blogNumber!'});
    }
  } catch (error) {
    // Log the error but do not stop processing the rest of the user IDs
    return res.json({ok:-1, message:'Error finding blog'});
  }

  return res.json({ok:1, blog: existingBlog, message: "Successfully fetched existing blog!" });
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
  getBlogByNumber,
  AddBlog
};

// {
//   "blogNumber": "1",
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