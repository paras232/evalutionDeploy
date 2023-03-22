const express=require('express')
const {connection}=require('./db')
const {Router}=require('./routes/userRoutes')

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",Router)



app.listen(7000,async()=>{
    try{
        await connection
        console.log("connected to DB.")
    }catch(err){
        console.log(err)
    }
    console.log("server running on port 7000 ....")
})