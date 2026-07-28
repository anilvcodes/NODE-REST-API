const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log("userExist")

    if (userExist) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    res.status(201).json({
      msg: "User registered successfully",
      user,
    });
    console.log(user);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
});

// Get All Users
router.get("/register", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
    console.log(users)
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
});

module.exports = router;
