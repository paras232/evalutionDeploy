const mongoose=require('mongoose')

const movieSchema=mongoose.Schema({
    title:String,
    rating:Number,
    actor:String,
    director:String
},{
    versionKey:false

})
const MovieModel=mongoose.model("movie",movieSchema)

module.exports={MovieModel}