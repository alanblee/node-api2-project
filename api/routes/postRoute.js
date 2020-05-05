const express = require("express"),
  router = express.Router();
posts = require("../controllers/postController");

// GET all posts
router.route("/").get(posts.getPosts);
// POST create new post
router.route("/").post(posts.createPost);
//GET get specific post
router.route("/:postId").get(posts.singlePost)
module.exports = router;
