const express=require("express")
const {MovieModel}=require("../moviemodels/movie.model")

const movieRoutes=express.Router()



movieRoutes.get("/",async(req,res)=>{
    // const params=req.query
    let query=req.query
     try{
         const users=await MovieModel.find(query)
         res.send(users)
     }
     catch(err){
         console.log(err)
         res.send("err:something went wrong")
     }
     
 })
 movieRoutes.get('/viewtitleasc',async(req,res)=>{
     const params=req.query
     try{
         const users=await MovieModel.sort("title:1")
         res.send(users)
         console.log(users)
     }
     catch(err){
         console.log(err)
         res.send("err:something went wrong")
     }
     //console.log(params)
 })
 
 movieRoutes.post("/addMovie",async(req,res)=>{
    
     try{
         const payload= req.body
         const movie= new MovieModel(payload)
         await movie.save()
          console.log(payload)
          res.send("created succesfully")
     }
     catch(err){
         console.log(err)
         res.send("something went wrong")
     }
 })
 
 movieRoutes.put('/updatemovie/:userId',async(req,res)=>{
     const userId=req.params.userId
     const payload=req.body;
     try{
 const query=await MovieModel.findByIdAndUpdate({_id:userId},payload)
 console.log(query)
 res.send("updated")
     }
     catch(err){
         console.log(err)
         res.send("something went wrong")
     }
 })
 
 
 movieRoutes.delete("/deletemovie/:userId",async(req,res)=>{
     const userId=req.params.userId
 
     try{
       await MovieModel.findByIdAndDelete({_id:userId})
       console.log(userId)
        res.send("deleted...")
       
     }
     catch(err){
         console.log(err)
         res.send("somethin went wrong")
     }
 })
 
 module.exports={movieRoutes}