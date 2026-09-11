const express =require("express");
const app =express();

 app.use(express.json());
 app.get("/",(req,res)=>{
    res.json({
        admin:"ana",
        blog:"this is blog 1",
        desc:"this is blog description"
    })
 })



 app.listen(3000,()=>{
    console.log("server is running on port 3000");
 })