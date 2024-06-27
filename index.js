const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Connection = require("./db.js")
const dotenv = require('dotenv')
const cors = require("cors")
const body_parser = require("body-parser")
const Router = require('./Router/route.js')
const path = require('path')



dotenv.config()
app.use(cors())

app.use(body_parser.json({extended:true}))
app.use(body_parser.urlencoded({extended:true}))




const port = 8000;
app.use('/', Router);

app.listen(port,()=>console.log("server is start on 8000 port this number"));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);