const express=require('express')
const {connection}=require('./db')
const {movieRouter}=require('./routes/movie.routes')
require('dotenv').config()

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('movie app')
})

app.use("/movie",movieRouter)

app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log(err.message)
    }
    console.log(`server running on port ${process.env.port}`)
})

