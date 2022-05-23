const PostModel = require("../models/post.model");

module.exports = {
  // get all posts
  getAllPosts: (req, res) => {
    PostModel.getAllPosts((err, post) => {
      if (err) {
        console.log("Error occurred while getting all posts");
        res.send(err);
      }
      console.log("All posts = ", post);
      res.send(post);
    });
  },

  //get post by id
  getPostById: (req, res) => {
    PostModel.getPostById(req.params.id, (err, post) => {
      if (err) {
        console.log("Error occurred while getting post by ID");
        res.send(err);
      }
      console.log("Single post = ", post);
      res.send(post);
    });
  },

  // create a new post
  createNewPost: (req, res) => {
    const postData = new PostModel(req.body);
    // check null
    if (req.body.constructor === Object && Object(req.body) == 0) {
      res
        .send(400)
        .send({
          success: false,
          message: "Please enter all fields"
        });
    } else {
      PostModel.createPost(postData, (err, post) => {
        if (err) {
          console.log("Error occurred while creating a new post");
          res.send(err);
        }
        res.json({
          status: true,
          message: "Post creted successfully",
          data: post
        });
      });
    }
  },

  // update post
  updatePost: (req, res) => {
    const postData = new PostModel(req.body);
    // check null
    if (req.body.constructor === Object && Object(req.body) == 0) {
      res
        .send(400)
        .send({
          success: false,
          message: "Please enter all fields"
        });
    } else {
      PostModel.updatePost(req.params.id, postData, (err, post) => {
        if (err) {
          console.log("Error occurred while updating post by ID");
          res.send(err);
        }
        res.json({
          status: true,
          message: "Post updated successfully",
          data: post
        });
      });
    }
  },

  // delete post
  deletePost: (req, res) => {
    PostModel.deletePost(req.params.id, (err, post) => {
      if (err) {
        console.log("Error occurred while deleting post by ID");
        res.send(err);
      }
      res.json({
        success: true,
        message: "Post deleted successfully"
      });
    })
  }
};