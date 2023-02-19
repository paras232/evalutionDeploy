const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/User.routes")
const {curdRouter}=require("./routes/curd.routes")
const {authenticate}=require("./middleware/authenticate.middleware")


const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/curd",curdRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }catch(err){
        console.log({"error":err.message})
    }
    console.log("Server is runing on port 8080")
})