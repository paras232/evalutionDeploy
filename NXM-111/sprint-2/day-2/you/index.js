const express=require("express")
const{json}=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())

//GET
app.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.json(data.body)
    console.log(data.body)
})

//POST
app.post("/poststodo",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.student.push(req.body)
    console.log(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("Posted")
})

//PUT
app.put("/putstodo",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.student.length;i++){
        if(data.student[i].id==req.body.id){
            data.student[i].sub==req.body.sub
            console.log(data.student[i].sub) 
        }
    }
fs.writeFileSync("./db.json",JSON.stringify(data))
res.send("Patched")
})
//DELETE
app.delete("/deletetodo",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<data.student.length;i++){
        if(data.student[i].id==req.body.id){
            data.student.splice(i,1)
        }
    }
fs.writeFileSync("./db.json",JSON.stringify(data))
res.send("The sub you wanted to delete, Has been deleted")
})

app.listen(4080,()=> console.log("runing server port 4080"))