const posts = require("../../data/db");

//GET get all posts
module.exports.getPosts = async (req, res) => {
  const allPosts = await posts.find();
  if (allPosts) {
    res.status(200).json(allPosts);
  } else {
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
};

//POST create new post
module.exports.createPost = async (req, res) => {};
