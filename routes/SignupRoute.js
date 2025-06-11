const express=require('express')
const router=express.Router()
const { Signup, Login } = require('../controller/Signup,')
const {auth,isstudent, isadmin} =require('../middleware/auth')
router.post("/signup",Signup)
router.post("/login",Login)
router.get('/student',auth,isstudent,(req,res)=>{
res.send("Hello This is Student dashboard")
})

router.get('/admin',auth,isadmin,(req,res)=>{
res.send("Hello This is Student dashboard")
})
module.exports=router