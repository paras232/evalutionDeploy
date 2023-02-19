const express=require("express")
const {curdModel} = require("../models/curd.model")

const curdRouter=express.Router()

curdRouter.get("/",async(req,res)=>{
    const notes= await curdModel.find()
    res.send(notes)
})

curdRouter.post("/create",async(req,res)=>{
    try{
        const payload=req.body
        const note = new curdModel(payload)
        await note.save()
        res.send({"msg":"note Created"})
    }catch(err){
        res.send({"msg":err.message})
    }
})


curdRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.id
    const note= await curdModel.findOne({_id:noteID})
    const user_in_note=note.userID
    const user_in_making=req.body.userID
    try{
        if(user_in_making!==user_in_note){
            res.send({"msg":"You are not Authorized"})
        }else{
            await curdModel.findByIdAndUpdate({_id:noteID},payload)
       res.send({"msg":`note with userID ${noteID} has been updated`})
        }
    }catch(err){
        res.send({"msg":err.message})
    }
})

curdRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    try{
    await curdModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`note with userID ${noteID} has been deleted`})
    }catch(err){
        res.send({"msg":err.message})
    }
})

module.exports={
    curdRouter
}