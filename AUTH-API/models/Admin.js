const mongoose = require("mongoose");

const adminSchema = new monogoose.Schema(
  {
    adminname: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "E-mail is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timerstaup: true,
  },
);
module.exports = mongoose.model("Admin", adminSchema);
