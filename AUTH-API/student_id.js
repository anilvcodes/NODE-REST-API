const express= require("express");
const mongoose= require("mongoose");
const app=express()
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userDB");
 const User = mongoose.model(`Users`,{
    schoolname:String,
    username:String,
    email:String,
    address:String,
    password:String,
    
 });
  
 app.post("/student_register",async function(req,res) {
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    const schoolname=req.body.schoolname;
    const address=req.body.address;
    
    const userexist= await User.findOne({ email:email } );
    if(userexist){
        return res.status(400).send("user alredy exist");
    }
    const user= new User({
        schoolname:schoolname,
        username:username,
        email:email,
        address:address,
        
        password:password,
    });

     await user.save();
    res.json({
        "msg":"user register "
    })
 })


 app.get("/student_register",async(req,res)=>{
try{
const users=  await User.find();
res.json(users)
} 
catch (error){
    res.status(500).send(error.message);
}
 });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});