const posts = require("../../data/db");

//GET get all posts
module.exports.getPosts = async (req, res) => {
  try {
    const allPosts = await posts.find();
    res.status(200).json(allPosts);
  } catch (err) {
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved.", err });
  }
};

//POST create new post
module.exports.createPost = async (req, res) => {
  const { title, contents } = req.body;
  if (!title && !contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post.",
    });
  } else {
    try {
      const newPostInfo = {
        title,
        contents,
      };
      const newPost = await posts.insert(newPostInfo);
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json({
        error: "There was an error while saving the post to the database",
        err,
      });
    }
  }
};
