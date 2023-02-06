const {router} = require("express")
const series = router()


//series
series.get("/series",(req,res)=>{
    const data =JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.json(data.series)
    console.log(data.series)
})

//post
series.post("/series/addseries",(req,res)=>{
    res.send("series")
})

//patch
series.patch("/series/:id",(req,res)=>{
    res.send("series")
})

//delete
series.delete("/series/:id",(req,res)=>{
    res.send("series")
})



module.exports = series