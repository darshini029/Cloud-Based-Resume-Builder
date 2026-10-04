const jwt=require("jsonwebtoken");
module.exports=(req,res,next)=>{
 const t=req.headers.authorization?.split(" ")[1];
 if(!t)return res.status(401).json({message:"Login required"});
 try{req.user=jwt.verify(t,process.env.JWT_SECRET||"dev_secret");next()}
 catch(e){res.status(401).json({message:"Invalid session"})}
};