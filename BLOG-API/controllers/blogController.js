const Blog = require("../models/Blog");

const blogPost = async (req, res) => {
  try {
    const { title, content, auther } = req.body;

    const blogExist = await Blog.findOne({ title });

    if (blogExist) {
      return res.status(409).json({
        msg: "Blog already exists",
      });
    }

    const blog = new Blog({
      title,
      content,
      auther,
    });

    await blog.save();

    return res.status(201).json({
      msg: "Blog successfully saved",
      blog,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const blogGet = async (req, res) => {
  try {
    const blog = await Blog.find();

    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

module.exports = {
  blogPost,
  blogGet,
};
