const express=require("express")
const {registerModel}=require("../models/register.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const registerRouter=express.Router()

registerRouter.post("/register",async(req,res)=>{
    const{name,email,gender,password,age,city}=req.body
    try{
        
    }catch(err){

    }
})