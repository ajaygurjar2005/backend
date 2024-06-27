const Post = require("../Model/post.js"); // Capitalized 'Post' to represent the model

const createPost = async (req,res) =>{
    try {
        const newPost = await new Post(req.body);
        newPost.save();
        return res.status(200).json({msg:"post savee successfully "})
    } catch (err) {
        res.status(500).json({msg:"unable to succes"},err)
    }
};

const getAllPosts = async (req,res) =>{
    let category = req.query.category;
    let posts;
    try{
        if(category){
            posts = await Post.find({categories:category})
        }
        else{
            posts= await Post.find({});
        }
        return res.status(200).json(posts)
    }
    catch (err){
        return res.status(500).json({msg:"unable to find data"})
    }
}

const getPost = async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post)
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

const updatePost = async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(401).json({msg:"Sorry user cannot exist"})
        }

        let response = await Post.findByIdAndUpdate(req.params.id,{$set:req.body})
        return res.status(200).json({msg:"post updated successfully"})
    }
    catch (err){
        res.status(500).json({msg:err.message})
    }
}

const deletePost = async (req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        console.log(post, "post")
        if(!post){
            return res.status(500).json({msg:"Sorry this post cannot exist"})
        }
        await post.deleteOne();
        return res.status(200).json({msg:"post delete successfully "})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

module.exports = {createPost,getAllPosts,getPost,updatePost,deletePost};
