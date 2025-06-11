const express=require('express')
const app=express()
const {DatabaseConnection} =require("./database")
require("dotenv").config()
//json parse in middleware

app.use(express.json())
//db connection to database

DatabaseConnection()
app.use('/',require("./routes/SignupRoute"))
app.get('/',(req,res)=>{
res.json({
    success:true,
    msg:"First Api Call"
})
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is  Learning on port ${process.env.PORT}`)
})