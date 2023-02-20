const express=require("express")
const {connection}=require("./db")
const {registerRouter}=require("./routes/registeration.route")
const {postRouter}=require("./routes/post.routes")

require("dotenv").config()
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",registerRouter)
app.use("/posts",postRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log({"error":err.message})
    }
    console.log(`server is running on port ${process.env.port}`)
})