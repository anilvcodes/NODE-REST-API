const Admin = require("../models/Admin");

const registerAdmin = async (req, res) => {
  try {
    const { adminname, email, password } = req.body;

    const adminExist = await Admin.findOne({ email });

    if (adminExist) {
      return res.json({
        msg: "Admin already exists",
      });
    }

    const admin = new Admin({
      adminname,
      email,
      password,
    });
    console.log(admin);

    await admin.save();

    return res.json({
      msg: "Admin registered successfully",
      admin,
     
    });
     

  } catch (err) {
    return res.json({
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
  getAdmin,
};
