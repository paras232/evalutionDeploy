const express=require("express")
const {connection}=require("./db")

require("dotenv").config()
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    "Home Page"
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log({"error":err.message})
    }
    console.log(` server is running on port ${process.env.port}`)
})