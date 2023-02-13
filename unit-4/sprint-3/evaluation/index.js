const express=require("express")
const {connection}=require("./database/db")
const {foodRouter}=require("./foodroutes/food.routes")

require("dotenv").config()
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("WELCOME")
})

app.use("/food",foodRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }catch(err){
        console.log("Cannot connectect to DB")
        console.log(err)
    }


    console.log(`connected to server runing on port ${process.env.port}`)
})