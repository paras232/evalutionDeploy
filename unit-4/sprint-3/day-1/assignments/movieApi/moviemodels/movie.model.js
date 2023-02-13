const mongoose=require('mongoose')

const movieSchema=mongoose.Schema({
    title:String,
    rating:Number,
    actor:String,
},{
    versionKey:false

})
const MovieModel=mongoose.model("movieapp",movieSchema)

module.exports={MovieModel}