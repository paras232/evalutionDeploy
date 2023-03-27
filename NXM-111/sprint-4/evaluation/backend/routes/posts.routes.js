const express=require('express')
const {PostModel}=require('../models/postModel')

const postRouter=express.Router()

postRouter.get("/",async(req,res)=>{
    const posts=await PostModel.find()
    res.send(posts)
})

postRouter.post("/add",async(req,res)=>{
    try{
        const payload=req.body
        const post = new PostModel(payload)
        await post.save()
        res.send({"msg":"New Post"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

postRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const postID=req.params.id
    const post= await PostModel.findOne({_id:postID})
    const user_in_post=post.userID
    const user_in_making=req.body.userID
    try{
        if(user_in_making !== user_in_post){
            res.send({"msg":"You are not authorized"})
        }else{
            await PostModel.findByIdAndUpdate({_id:postID},payload)
            res.send({"msg":"post has been updated"})
        }
    }catch(err){
        res.send({"msg":err.message})
    }

})

postRouter.delete("/delete/:id",async(req,res)=>{
    const postID=req.params.id
    const post= await PostModel.findOne({_id:postID})
    const user_in_post=post.userID
    const user_in_making=req.body.userID
    try{
        if(user_in_making !== user_in_post){
            res.send({"msg":"You are not authorized"})
        }else{
            await PostModel.findByIdAndDelete({_id:postID})
            res.send({"msg":"post has been deleted"})
        }
    }catch(err){
        res.send({"msg":err.message})
    }

})

module.exports={
    postRouter
}