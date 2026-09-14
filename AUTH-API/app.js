require("dotenv").config();
const express = require("express")
const mongoose= require("mongoose");
const connectDB= require("./config/db");


const app =express();

connectDB();

app.use(express.json());

const adminRoutes = require("./routes/adminRoutes");
app.use("/api", adminRoutes);



app.listen(3000,()=>{
    console.log("server running on port 3000 ")
});
