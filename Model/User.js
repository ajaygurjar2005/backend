const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlenght:20
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})


const User =  mongoose.model("user",UserSchema);

module.exports = User;