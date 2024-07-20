require('dotenv').config()
const Blog = require('./models/blog');
// const bcrypt = require('bcryptjs');

// libraries
const express = require('express');
const mongoose = require('mongoose');
// const fs = require('fs');
const path = require('path');
const app = express();

// routes
const blogRoutes = require('./routes/blog-routes');
const HttpError = require('./models/http-error');

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// Middleware to parse JSON bodies
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// Routes
app.use('/api/blogs', blogRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route. ['+req.body.url+']', 404);
  throw error;
});

const port = process.env.DB_PORT || 5000;
// MongoDB ATLAS
const uriDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nmjiwwv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; 

// MongoDB Community Server
// const uriDB = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`; 

mongoose
  .connect(
    uriDB,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log("LOG - MongoDB connected successfully");

    // Start the server
    app.listen(port, () => {
      console.log(`LOG - Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
    console.log("LOG - Server failed to connect");
  });