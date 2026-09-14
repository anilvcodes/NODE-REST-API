const express = require("express");
const router = express.Router();



const {
  registerAdmin,
  loginAdmin,
  getAdmin,
} = require("../controllers/adminController");



router.post("/admin",registerAdmin);
router.post("/login",loginAdmin);
router.get("/",getAdmin);

module.exports = router;