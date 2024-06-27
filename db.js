const mongoose = require('mongoose')

const Connection = (username,password)=>{
    console.log(username , password)
    const url = `mongodb+srv://${username}:${password}@cluster0.rgeqoew.mongodb.net/`;
    mongoose.connect(url,{useNewUrlParser: true})
    .then(()=>{
        console.log("mongoose connected")
    }).catch((err)=>{
        console.log("Sorry unable to connect",err)
    })
}

module.exports = Connection;