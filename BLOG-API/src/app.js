const express=require("express");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        sucess:true,
        message:"blog rest api "
    
    })
})

module.exports = app;
