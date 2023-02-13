const express=require('express')
const {connection}=require("./db/db")
const {movieRoutes}=require("./routes/routes")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to our Api")
})

app.use("/show",movieRoutes)

app.listen(5500,async()=>{
    try{
await connection
console.log("connected mongo db")
    }
    catch(err){
        console.log("error server not running")
        console.log(err)
    }
    console.log("server connected to port 5500....")
})