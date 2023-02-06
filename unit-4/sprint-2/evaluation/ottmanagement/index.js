const express = require("express")
const fs = require("fs")

const MoviesRoutes = require("./routerM/movies.index")
const SeriesRoutes = require("./routerS/series")

const app = express()

app.use("/movies",MoviesRoutes)
app.use("/series",SeriesRoutes)

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use((req,res,next)=>{

})








app.listen(1220,()=>{
    console.log("runing on server 1220")
})