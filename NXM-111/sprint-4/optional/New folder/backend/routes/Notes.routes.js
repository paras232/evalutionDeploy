const express=require('express')
const {NoteModel}=require('../models/note.model')

const noteRouter=express.Router()

noteRouter.get("/",async(req,res)=>{
    try{
        const notes=await NoteModel.find()
        res.send(notes)
    }catch(err){
        res.send({"msg":err.message})
    }
})

noteRouter.post("/create",async(req,res)=>{
    try{
        const payload=req.body
        const note=new NoteModel(payload)
        await note.save()
        res.send({"msg":"note has been added"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

noteRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.id
    const post= await NoteModel.findOne({_id:noteID})
    const user_in_post=post.userID
    const user_in_making=req.body.userID
    try{
        if(user_in_making !== user_in_post){
            res.send({"msg":"You are not Authorized"})
        }else{
            await NoteModel.findByIdAndUpdate({_id:noteID},payload)
            res.send({"msg":"post has been updated"})
        }
        
    }catch(err){
        res.send({"msg":err.message})
    }
    
})

noteRouter.delete("/delete/:id",async(req,res)=>{
    try{
        const noteID=req.params.id
        await NoteModel.findByIdAndDelete({_id:noteID})
        res.send({"msg":"note has been deleted"})
    }catch(err){
        res.send({"msg":err.message})
    }
    
})

module.exports={
    noteRouter
}