const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





const registerAdmin = async (req, res) => {
  try {
    const { adminname, email, password } = req.body;

    const adminExist = await Admin.findOne({ email });

    if (adminExist) {
      return res.json({
        msg: "Admin already exists",
      });
    }

    // Hash password manually
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      adminname,
      email,
      password: hashedPassword,
    });

    await admin.save();

    return res.json({
      msg: "Admin registered successfully",
      admin: {
        adminname: admin.adminname,
        email: admin.email,
      },
    });

  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};


const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        msg: "Admin not found",
      });
    }

    // Compare entered password with hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        msg: "Invalid email or password",
      });
    }

    // Create token
    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      msg: "Login successful",
      token,
      admin: {
        id: admin._id,
        adminname: admin.adminname,
        email: admin.email,
      },
    });

  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};





const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
     console.log(admin);
    return res.status(200).json(admin);
    
  } catch (err) {
    return res.json({
      msg: err.message,
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdmin,
};