const jwt=require("jsonwebtoken")
require("dotenv").config()

exports.auth=(req,res,next)=>{
    try{
//extract jwt token
const {token}=req.body
if(!token)
{
    return res.status(401).json({
        success:false,
        message:"token missing"
    })
}

//verify token 
try{
const decode=jwt.verify(token,process.env.JWTKEY);
console.log(decode)

req.user=decode;

}
catch(error)
{
 return res.status(401).json({
        success:false,
        message:"token is invalid"
    })
}

next();

    }
    catch(error){
console.log(error)
    }

}
exports.isstudent=(req,res,next)=>{
try{
    console.log(req.user)
if(req.user.role!="Student")
{
   return res.status(401).json({
        success:false,
        message:"This is procteded route for student"
    })  
}
next();
}
catch(error)
{
     return res.status(505).json({
        success:false,
        message:"Something is occur while verifing token"
    })
}
}

exports.isadmin=(req,res,next)=>{
try{
if(req.user.role!="Admin")
{
   return res.status(401).json({
        success:false,
        message:"This is procteded route for Admin"
    })  
}
next();
}
catch(error)
{
     return res.status(505).json({
        success:false,
        message:"Something is occur while verifing token"
    })
}
}


