const express = require("express"),
  router = express.Router();
posts = require("../controllers/postController");

// GET all posts
router.route("/").get(posts.getPosts);

// POST create new post
router.route("/").post(posts.createPost);

//GET get specific post
router.route("/:postId").get(posts.singlePost);

//PUT edit specific post
router.route("/:postId").put(posts.editPost);

//DELETE delete specific post
router.route("/:postId").delete(posts.deletePost);

//GET get all comments from specific post
router.route("/:postId/comments").get(posts.getPostComments);

//POST create comment for specific post
router.route("/:postId/comments").post(posts.createNewComment);



module.exports = router;
