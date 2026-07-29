const Admin=require("../models/Admin");

const registerAdmin= async(req,res)=>{
   try{

    const { registerAdmin,email,password}=req.body;
    const adminExist= await Admin.findOne({email});
    if (adminExist){
       return res.json({
        msg:"admin already exist",
        })
    }
   } 
   catch(err){
    res.json({
        msg:err.message,
    })
     const admin = new Admin({
        adminname,
        email,
        password,
     })
     await admin.save();
     
     res.json({
        msg:" admin registered successfuly",
        admin,

     })

   }
}

const getAdmin= async(req,res)=>{
    try{
        const admin= await Admin.find();
         res.status(200).json(admin);
    }
    catch(err){
        res.json({
            msg:err.message,
        })

    }
}
module.exports={ 
    registerAdmin,
    getAdmin,
}