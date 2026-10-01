const express = require("express");

const {
  register,
  login,
  getProfile
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// POST /api/auth/register
router.post("/register", register);


// POST /api/auth/login
router.post("/login", login);


// GET /api/auth/profile
// Protected route
router.get("/profile", authMiddleware, getProfile);


module.exports = router;