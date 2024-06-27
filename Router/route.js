const express = require('express');
const app = express();

const Router = express.Router();
const {signupUser ,loginUser} = require("../Controller/Usercontroller.js")
const {uploadImage,getImage} = require("../Controller/image-controller.js")
const { createPost, getAllPosts,getPost ,updatePost,deletePost} = require("../Controller/post-controller.js")
const authenticateToken = require("../Controller/jwt-controller.js")
const {newComment,getComments , deleteComment} = require("../Controller/comment-controller.js")
const upload = require("../utills/upload.js")


Router.post("/signup" ,signupUser)
Router.post("/login",loginUser)

Router.post("/file/upload",upload.single('image'),uploadImage)
Router.get("/uploads/:filename",getImage)
Router.post("/create", authenticateToken,createPost)
Router.get('/posts',authenticateToken,getAllPosts)
Router.get("/post/:id",authenticateToken,getPost)
Router.put("/update/:id",authenticateToken,updatePost)
Router.delete('/delete/:id',authenticateToken,deletePost)
Router.post('/comment/new',authenticateToken,newComment)
Router.get('/comments/:id',authenticateToken,getComments)
Router.delete('/comment/delete/:id',authenticateToken,deleteComment)



module.exports = Router;


