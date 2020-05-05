const express = require("express"),
  router = express.Router();
posts = require("../controllers/postController");

// GET all posts
router.route("/").get(posts.getPosts);
// POST create new post
router.route("/").post(posts.createPost);

module.exports = router;
