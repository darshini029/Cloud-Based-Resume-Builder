require("dotenv").config();
const express=require("express"),mongoose=require("mongoose"),cors=require("cors"),path=require("path");
const app=express();
app.use(cors());app.use(express.json({limit:"2mb"}));app.use(express.static(path.join(__dirname,"public")));
app.use("/api/auth",require("./routes/auth"));app.use("/api/resumes",require("./routes/resumes"));
app.get("/api/health",(req,res)=>res.json({status:"ok"}));
app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
const port=process.env.PORT||3000;
(async()=>{if(process.env.MONGODB_URI){try{await mongoose.connect(process.env.MONGODB_URI);console.log("MongoDB connected")}catch(e){console.log("MongoDB error:",e.message)}}else console.log("Add MONGODB_URI for database features");app.listen(port,()=>console.log("CloudResume running on http://localhost:"+port))})();