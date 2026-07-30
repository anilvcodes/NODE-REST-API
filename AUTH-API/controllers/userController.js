
const User = require("../models/User");

// Register User
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }
 const hash = await bcrypt.hash(password, 10);

  const user = new User({
      username,
      email,
      password: hash
    });

     const token = generateToken(user._id);

    res.status(201).json({
      msg: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};







module.exports = {
  registerUser,
  getUsers,
};
