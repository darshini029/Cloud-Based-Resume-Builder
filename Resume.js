const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
 title:{type:String,default:"My Resume"},
 data:{type:Object,default:{}},
 updatedAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model("Resume",schema);