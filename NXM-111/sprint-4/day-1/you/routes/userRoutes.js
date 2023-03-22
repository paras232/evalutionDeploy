const express=require('express')
const {UserModel}=require('../models/UserModel')
const jwt=require('jsonwebtoken')
const Router=express.Router()


Router.post("/register",async(req,res)=>{
    try{
        const user=new UserModel(req.body)
        await user.save()
        res.status(200).send({"msg":"Registeration has been done."})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
   
})

Router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email,password})
        user.length>0? res.status(200).send({"msg":"Login Succesfull","token":jwt.sign({name:"batman"},'masai',{expiresIn:"1hr"})}):
            res.status(400).send({"msg":"Login Failed"})
        
        // console.log(user)   //if [] is empty its mean no document is present matching following details
    }catch(err){
        res.status(400).send({"msg":err.message})
    }

})
Router.get("/details",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token, "masai", (err,decoded)=>{
        decoded? res.status(200).send("all the details"): res.status(400).send({"msg":err.message})
    })
})

Router.get("/moviedata",(req,res)=>{
    const token = req.headers.authorization
    jwt.verify(token, "masai", (err,decoded)=>{
        decoded? res.status(200).send("all the  movie deta"): res.status(400).send({"msg":err.message})
    })
})

module.exports={Router}