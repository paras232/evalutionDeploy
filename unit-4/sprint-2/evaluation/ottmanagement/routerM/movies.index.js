const express = require("express")
const fs=require("fs")
const movies =express.Router()

movies.use(express.json())

//movies
movies.get("/",(req,res)=>{
    let movie =JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(movie.movies)
    
})

movies.get("/:id",(req,res)=>{
    let movie =JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<movie.movies.length;i++){
        if(movie.movies[i].movie_id==req.params.id){
            res.send(movie.movies[i])
        }
    }
    
})
//post
movies.post("/addmovie",(req,res)=>{
    let movie = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    movie.movies.push(req,body)
    console.log(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(movie))
    res.send("Posted movie")
})


movies.use("/addmovie",(req,res,next)=>{
    if(validator(req,res)){
        next()
    }else{
        res.status(404).send("not authorised")
    }
})


//patch
movies.patch("/movies/:id",(req,res)=>{
    let movie =JSON.parse(fs.readFileSync("./db.json","utf-8"))
    for(let i=0;i<movie.movies.length;i++){
        if(movie.movies[i].movie_id==req.params.id){
            if(req.body.movie_id){movie.movies[i].movie_id=req.body.movie_id}
            if(req.body.genre){movie.movies[i].movie_id=req.body.genre}
            if(req.body.name){movie.movies[i].movie_id=req.body.name}
            if(req.body.director){movie.movies[i].movie_id=req.body.director}
        }
    }
    fs.writeFileSync("./db.json",JSON.stringify(movie))
    res.send("updated")
})

//delete
movies.delete("/movies/:id",(req,res)=>{
    res.send("Movies")
})

module.exports = movies