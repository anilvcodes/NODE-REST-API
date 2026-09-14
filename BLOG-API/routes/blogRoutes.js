const express = require("express");

const router = express.Router();

const {
  blogPost,
  blogGet,
} = require("../controllers/blogController");

router.post("/blog", blogPost);
router.get("/blog", blogGet);

module.exports = router;
