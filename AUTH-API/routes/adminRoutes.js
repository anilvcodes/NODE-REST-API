const express = require("express");
const router = express.Router();



const {
  registerAdmin,
  getAdmin,
} = require("../controllers/AdminController");



router.post("/admin",registerAdmin);
router.get("/admin",getAdmin);

module.exports = router;
