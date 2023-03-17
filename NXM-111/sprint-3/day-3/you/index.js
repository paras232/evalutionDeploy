const express=require('express')

const {connection}=require("./db")

const {todoRouter}=require("./routes/routes")
require("dotenv").config()

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("WELCOME")
})

app.use("/todos",todoRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }catch(err){
        console.log("cannot connect")
        console.log(err)
    }
    console.log(`Server running on the port ${process.env.port}`)
})

