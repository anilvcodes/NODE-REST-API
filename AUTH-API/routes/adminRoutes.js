const express = require("express");
const router = express.Router();



const {
  registerAdmin,
  loginAdmin,
  getAdmin,
} = require("../controllers/AdminController");



router.post("/admin",registerAdmin);
router.post("/login",loginAdmin);
router.get("/",getAdmin);

module.exports = router;