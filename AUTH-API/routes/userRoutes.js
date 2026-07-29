const express = require("express");
const router = express.Router();

const {
  registerUser,
  getUsers,
} = require("../controllers/userController");

const {
  registerAdmin,
  getAdmin,
} = require("../controllers/AdminController");

router.post("/register", registerUser);

router.get("/users", getUsers);

router.post("/admin",registerAdmin);
router.get("/admin",getAdmin);

module.exports = router;
