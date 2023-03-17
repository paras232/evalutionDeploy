const express=require("express")

const todoRouter=express.Router()
const {TodoModel}=require("../model/model")

todoRouter.get("/",async(req,res)=>{
    let query=req.query

    try{
        const todos=await TodoModel.find(query)
        res.send(todos)
    }catch(err){
        console.log(err)
        res.send({"msg":"Cannot connect to todo","error":err.message})
    }
})

todoRouter.post("/create",async(req,res)=>{
    try{
        const todo=new TodoModel(req.body)
        await todo.save()
        res.send({"msg":"User is registered"})
    }catch(err){
        
        res.send({"msg":"Cannot registered","error":err.message})
    }
})

todoRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
        await TodoModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg":"todo has been updated"})
    }catch(err){
        
        res.send({"msg":"Cannot able to update todo","error":err.message})
    }
})


todoRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id

    try{
        await TodoModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"todo has been deleted succesfully"})
    }catch(err){
        
        res.send({"msg":"Cannot able to delete todo","error":err.message})
    }
})

module.exports={todoRouter}