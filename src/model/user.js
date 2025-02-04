const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    },
})

const User = mongoose.model("user",userSchema) //user is collection name in DB and User is result model can be used for CRUD operation.

module.exports =  {User} 