const express = require('express');
const { check } = require('express-validator');

const blogController = require('../controllers/blog-controller');

const router = express.Router();

// GET
router.get('/get', blogController.getAllBlogs);
router.get('/get/blog/:blogNumber', blogController.getBlogByNumber);

// POST
router.post(
  '/post',
  [
    check('blogNumber')
      .not()
      .isEmpty(),
    check('author')
      .not()
      .isEmpty(),
    check('title')
      .not()
      .isEmpty(),
    check('readTime')
      .not()
      .isEmpty(),
    check('content')
  ],
  blogController.AddBlog
);

// PATCH
// router.patch(
//   '/patch/approve/offer',
//   [
    
//     check('oid'),
//     check('uid')
//   ],
//   appliedController.approveOffer
// );

// router.patch(
//   '/patch/approve/offers',
//   [],
//   appliedController.approveOffers
// );

// DELETE

// router.delete(
//   '/delete/:oid',
//   [],
//   offerController.deleteOffer
// )

module.exports = router;