const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/userDB");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1); // Optional: Exit the application if the database connection fails
  }
};

module.exports = connectDB;
