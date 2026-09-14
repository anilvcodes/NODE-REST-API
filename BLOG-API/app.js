require("dotenv").config();
const express = require("express")
const mongoose= require("mongoose");
const connectDB= require("./config/db");


const app =express();

connectDB();

app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");
app.use("/api", blogRoutes);



app.listen(3000,()=>{
    console.log("server running on port 3000 ")
});
