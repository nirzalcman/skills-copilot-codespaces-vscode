// create web server with express
const express = require('express');
// create router object
const router = express.Router();

// import the comment model
const Comment = require('../models/comment');
const Post = require('../models/post');

// create a route for a new comment
router.post('/posts/:postId/comments', (req, res) => {
  // create a new comment
  const comment = new Comment(req.body);
  // save the comment
  comment.save().then(comment => {
    // redirect to the post page
    return Post.findById(req.params.postId);
  }).then(post => {
    post.comments.unshift(comment);
    return post.save();
  }).then(post => {
    res.redirect(`/posts/${post._id}`);
  }).catch(err => {
    console.log(err);
  })
});

// export the router
module.exports = router;



