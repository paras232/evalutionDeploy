const express=require('express')
const {UserModel}=require('../models/user.model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age}=(req.body)
    try{
        bcrypt.hash(pass, 5, async(err,hash)=>{
            if(err) res.send({"msg":err.message})
            else{
                const user=new UserModel({name,email,pass:hash,age})
                await user.save()
                res.send({"msg":"new user has been registered"}) 
            }
        })
    }catch(err){
        res.send({"msg":err.message})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,pass}=(req.body)
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(pass, user[0].pass, (err,result)=>{
                if(result){
                    const token=jwt.sign({UserID:user[0]._id},"masai")
                    res.send({"msg":"Logged in","token":token})
                }else{
                    res.send({"msg":"Wrong credential"})
                }
            })
            
        }else{
            res.send({"msg":"Wrong credential"})
        }
    }catch(err){
        res.send({"msg":err.message})
    }
    
})

module.exports={
    userRouter
}