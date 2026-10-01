const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();


// Connect MongoDB
connectDB();


// Middleware
app.use(express.json());


// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Auth API is running"
  });
});


// Auth routes
app.use("/api/auth", authRoutes);


// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});