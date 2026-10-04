const express=require("express"),Resume=require("../models/Resume"),auth=require("../middleware/auth");
const router=express.Router();
router.get("/",auth,async(req,res)=>{
 const r=await Resume.find({userId:req.user.id}).sort({updatedAt:-1});res.json(r);
});
router.post("/",auth,async(req,res)=>{
 const r=await Resume.create({userId:req.user.id,title:req.body.title||"My Resume",data:req.body.data||{}});
 res.json(r);
});
router.put("/:id",auth,async(req,res)=>{
 const r=await Resume.findOneAndUpdate({_id:req.params.id,userId:req.user.id},
 {data:req.body.data,title:req.body.title||"My Resume",updatedAt:new Date()},{new:true});
 if(!r)return res.status(404).json({message:"Resume not found"});res.json(r);
});
router.delete("/:id",auth,async(req,res)=>{
 await Resume.deleteOne({_id:req.params.id,userId:req.user.id});res.json({message:"Deleted"});
});
module.exports=router;