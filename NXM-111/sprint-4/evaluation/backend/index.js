const express=require('express')
const {connection}=require('./db')
const {userRouter}=require('./routes/users.routes')
const {postRouter}=require('./routes/posts.routes')
const {auth}=require('./authMiddleware/authmiddleware')

require('dotenv').config()
const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users",userRouter)
app.use(auth)
app.use("/posts",postRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log('connected to DB')
    }catch(err){
        console.log(err)
    }
    console.log(`server is running on port ${process.env.port}`)
})