const express=require("express")
const {TodoModel}=require('../model/model')

const todoRoutes=express.Router()



todoRoutes.get("/",async(req,res)=>{
    // const params=req.query
    let query=req.query
     try{
         const users=await TodoModel.find(query)
         res.send(users)
     }
     catch(err){
         console.log(err)
         res.send("err:something went wrong")
     }
     
 })
//  todoRoutes.get('/viewtitleasc',async(req,res)=>{
//      const params=req.query
//      try{
//          const users=await MovieModel.sort("title:1")
//          res.send(users)
//          console.log(users)
//      }
//      catch(err){
//          console.log(err)
//          res.send("err:something went wrong")
//      }
//      //console.log(params)
//  })
 
 todoRoutes.post("/",async(req,res)=>{
    
     try{
         const payload= req.body
         const movie= new TodoModel(payload)
         await movie.save()
          console.log(payload)
          res.status(200).send("data recived")
     }
     catch(err){
         console.log(err)
         res.send("invalid request body.")
     }
 })
 
 
 module.exports={todoRoutes}