const express= require("express");
const mongoose= require("mongoose");
const app=express()
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userDB");
 const User = mongoose.model(`Users`,{
    username:"String",
    email:"String",
    password:"String",
    
 });
  
 app.post("/register",async function(req,res) {
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.email;
    
    const userexist= await User.findOne({ email:username } );
    if(userexist){
        return res.status(400).send("user alredy exist");
    }
    const user= new User({
        name:name,
        email:email,
        password:password,
    });

    user.save();
    res.json({
        "msg":"user register "
    })
 })

app.listen(3000, () => {
  console.log("Server running on port 3000");
});