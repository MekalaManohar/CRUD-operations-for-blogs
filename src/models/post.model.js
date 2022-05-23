var dbConn = require("../../config/db.config");

let Post = function (post) {
  this.title = post.title;
  this.description = post.description;
  this.author = post.author;
};

// get all posts
Post.getAllPosts = (result) => {
  dbConn.query("SELECT * FROM blog", (err, res) => {
    if (err) {
      console.log("Error occurred while fetching all posts", err);
      result(null, err);
    } else {
      console.log("All posts fetched successfully");
      result(null, res);
    }
  });
};

// get post by ID
Post.getPostById = (id, result) => {
  dbConn.query("SELECT * FROM blog WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error occurred while fetching post by ID", err);
      result(null, err);
    } else {
      console.log("Posts fetched successfully");
      result(null, res);
    }
  });
};

// create new post
Post.createPost = (postData, result) => {
  dbConn.query("INSERT INTO blog SET ? ", postData, (err, res) => {
    if (err) {
      console.log("Error occurred while creating post", err);
      result(null, err);
    } else {
      console.log("43 created new post");
      result(null, res);
    }
  });
};

// update post
Post.updatePost = (id, postData, result) => {
  dbConn.query(
    "UPDATE blog SET title=?, description=?, author=? WHERE id=?",
    [postData.title, postData.description, postData.author, id],
    (err, res) => {
      if (err) {
        console.log("Error occurred while updating post");
        result(null, err);
      } else {
        console.log("Post updated successfully");
        result(null, res);
      }
    }
  );
};

// delete post
Post.deletePost = (id, result) => {
  dbConn.query("DELETE FROM blog WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("Error occurred while deleting post");
      result(null, err);
    } else {
      console.log("Post deleted successfully");
      result(null, res);
    }
  });
};
module.exports = Post;