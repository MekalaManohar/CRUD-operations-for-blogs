const express = require("express")
const router = express.Router();

const postController = require("../controllers/post.controller");

// get all posts
router.get("/", postController.getAllPosts);

// get post by ID
router.get("/:id", postController.getPostById);

// create new post
router.post('/',postController.createNewPost);

// update post
router.put('/:id',postController.updatePost);

// delete post 
router.delete('/:id',postController.deletePost);

module.exports = router;