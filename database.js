const mongoose=require('mongoose')
require("dotenv").config()

const DatabaseUri=process.env.MONG_URI

exports.DatabaseConnection=()=>{

    mongoose.connect(DatabaseUri).then(()=>{
        console.log("Database connected")
    }).catch(()=>{
        console.log("Something Error Occur while connection to database")
    })

}