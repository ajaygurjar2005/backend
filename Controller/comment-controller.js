const Comment = require("../Model/comment.js")
const { post } = require("../Router/route.js")

const newComment =  async (req,res) =>{
     try{
        let comment = await new Comment(req.body)
        comment.save()

        return res.status(200).json({msg:"comment saved successful"})
     }
     catch (err) {
        return res.status(500).json({msg:err.message})
     }
}

const getComments = async(req,res) =>{
    try{
        let comments = await Comment.find({postId:req.params.id})
        return res.status(200).json(comments)
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
     
}

const deleteComment = async (req,res) =>{
    try{
        let comment = await Comment.findById(req.params.id)
        await comment.deleteOne();

        return res.status(200).json({msg:"comment delete succesful"})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

module.exports = {newComment,getComments,deleteComment};