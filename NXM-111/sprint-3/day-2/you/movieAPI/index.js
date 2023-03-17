const express=require('express')
require("dotenv").config()
const {connection}=require("./db")
const {movieRoutes}=require("./routes/routes")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to our Api")
})

app.use("/movie",movieRoutes)

app.listen(process.env.port,async()=>{
    try{
       await connection
       console.log("connected mongo db")
    }
    catch(err){
        console.log("error server not running")
        console.log(err)
    }
    console.log(`server connected to port ${process.env.port}`)
})