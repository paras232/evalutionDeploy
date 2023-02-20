const express=require("express")
const {registerModel}=require("../models/register.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const registerRouter=express.Router()

registerRouter.post("/register",async(req,res)=>{
    const{name,email,gender,password,age,city}=req.body
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err) res.send({"masg":"somthing went wrong","error":err.message})
            else{
                const user=new registerModel({name,email,gender,password:hash,age,city})
                await user.save()
                res.send({"msg":"New user has been registered"})
            }
        })
    }catch(err){
        res.send({"masg":"somthing went wrong","error":err.message})
    }
})


registerRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await registerModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    let token=jwt.sign({userID:user[0]._id},"masai")
                    res.send({'msg':"Succesfully logged in","token":token})
                }else{
                    res.send({"msg":"Wrong credential"})
                }
            })
        }else{
            res.send({"msg":"Wrong credential"})
        }
    }catch(err){
        res.send({"masg":"somthing went wrong","error":err.message})
    }
})

module.exports={
    registerRouter
}