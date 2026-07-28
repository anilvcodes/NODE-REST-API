const express = require("express")
const mongoose= require("mongoose");
const connectDB= require("./config/db");

const app =express();
app.use(express.json());
connectDB();
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);


app.listen(3000,()=>{
    console.log("server running on port 3000 ")
});
