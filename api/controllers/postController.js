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

//GET get specific post
module.exports.singlePost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const foundPost = await posts.findById(postId);
    if (foundPost.length > 0) {
      res.status(200).json(foundPost);
    } else {
      res
        .status(400)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "The post information could not be retrieved.", err });
  }
};

//PUT edit specific post
module.exports.editPost = async (req, res) => {
  const postId = req.params.postId;
  const { title, contents } = req.body;

  if (!title && !contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post.",
    });
  } else {
    const postInfo = {
      title,
      contents,
    };
    try {
      const updatedPost = await posts.update(postId, postInfo);

      if (Number(updatedPost) === 1) {
        res.status(200).json(updatedPost);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    } catch (err) {
      res.status(500).json({
        error: "The post information could not be modified.",
        err: err.message,
      });
    }
  }
};

//DELETE deletes a specific post
module.exports.deletePost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const deletedPost = await posts.remove(postId);
    if (Number(deletedPost) === 1) {
      res.status(200).json(deletedPost);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "The post could not be removed", err: err.message });
  }
};

//GET get all comments for a specific post
module.exports.getPostComments = async (req, res) => {
  const postId = req.params.postId;
  try {
    const postComments = await posts.findPostComments(postId);
    console.log(postComments)
    if (postComments.length > 0) {
      res.status(200).json(postComments);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({
      error: "The comments information could not be retrieved.",
      err: err.message,
    });
  }
};
