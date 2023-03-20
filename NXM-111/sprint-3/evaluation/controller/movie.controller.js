const {MovieModel}=require('../models/movie.model')

const getMovieList = async(req, res)=>{
    try{
        let query={}
        const {min=1,max=10,genre,year_of_release}=req.query
        if(genre){
            query.genre=genre
        }
        if(year_of_release){
            query.year_of_release={$lt:year_of_release}
        }
        query.rating = {$gte:min,$lte:max}
        // console.log(query)
        const list=await MovieModel.find(query)
        res.send({movies:list})
    }catch(err){
        res.send(err.message)
    }
}

const getSingleMovie = async(req, res)=>{
    try{
        const {id}=req.params
        const mov = await MovieModel.findById(id)
        res.send({MovieModel: mov})
    }catch(err){
        res.send(err.message)
    }
}

const postMovie = async(req, res)=>{
    try{
        const payload=req.body
        const newMovie = await MovieModel.create(payload)
        res.send(newMovie)
    }catch(err){
        res.send(err.message)
    }
}

const updateMovie = async(req, res)=>{
    try{
        const payload=req.body
        const {id}=req.params
        const updated=await MovieModel.findByIdAndUpdate(id,payload)
        res.send("Movie Updated.")
    }catch(err){
        res.send(err.message)
    }
}

const deleteMovie = async(req, res)=>{
    try{
        const {id}=req.params
        const deleted=await MovieModel.findByIdAndDelete(id)
        res.send("Movie Deleted.")
    }catch(err){
        res.send(err.message)
    }
}

module.exports={
    getMovieList,
    getSingleMovie,
    postMovie,
    updateMovie,
    deleteMovie,
}