const express=require("express"),bcrypt=require("bcryptjs"),jwt=require("jsonwebtoken"),User=require("../models/User");
const router=express.Router();
const makeToken=u=>jwt.sign({id:u._id,name:u.name,email:u.email},process.env.JWT_SECRET||"dev_secret",{expiresIn:"7d"});
router.post("/register",async(req,res)=>{
 try{const{name,email,password}=req.body;
 if(!name||!email||!password)return res.status(400).json({message:"Fill all fields"});
 if(password.length<6)return res.status(400).json({message:"Password must be at least 6 characters"});
 if(await User.findOne({email}))return res.status(409).json({message:"Email already registered"});
 const u=await User.create({name,email,password:await bcrypt.hash(password,10)});
 res.json({token:makeToken(u),user:{name:u.name,email:u.email}});
 }catch(e){res.status(500).json({message:"Registration failed"})}
});
router.post("/login",async(req,res)=>{
 try{const{email,password}=req.body,u=await User.findOne({email});
 if(!u||!(await bcrypt.compare(password,u.password)))return res.status(401).json({message:"Invalid email or password"});
 res.json({token:makeToken(u),user:{name:u.name,email:u.email}});
 }catch(e){res.status(500).json({message:"Login failed"})}
});
module.exports=router;