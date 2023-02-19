const express=require("express")
const { productModel } = require("../models/product.model")

const productRouter=express.Router()

productRouter.get("/",async(req,res)=>{
    const notes= await productModel.find()
    res.send(notes)
})

productRouter.post("/create",async(req,res)=>{
    try{
        const payload=req.body
        const note = new productModel(payload)
        await note.save()
        res.send({"msg":"note Created"})
    }catch(err){
        res.send({"msg":err.message})
    }
})


productRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.id
    const note= await productModel.findOne({_id:noteID})
    const user_in_note=note.userID
    const user_in_making=req.body.userID
    try{
        if(user_in_making!==user_in_note){
            res.send({"msg":"You are not Authorized"})
        }else{
            await productModel.findByIdAndUpdate({_id:noteID},payload)
       res.send({"msg":`note with userID ${noteID} has been updated`})
        }
    }catch(err){
        res.send({"msg":err.message})
    }
})

productRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    try{
    await productModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`note with userID ${noteID} has been deleted`})
    }catch(err){
        res.send({"msg":err.message})
    }
})

module.exports={
    productRouter
}