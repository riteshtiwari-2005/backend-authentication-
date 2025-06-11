const mongoose=require("mongoose")

const Userschema=new mongoose.Schema({
    name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
Role:{
    type:String,
    require:true,
    enum:["Admin","Student","Visitor"]
}
})

module.exports = mongoose.model('User', Userschema);
