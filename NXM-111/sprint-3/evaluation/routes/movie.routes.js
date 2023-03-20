const {Router}=require('express')

const {
    getMovieList,
    getSingleMovie,
    postMovie,
    updateMovie,
    deleteMovie,
} = require("../controller/movie.controller")

const {fieldsAnalyzer}=require("../middleware/fieldsAnalyzer")
const {record}=require("../middleware/record")

const movieRouter=Router()

movieRouter.get("/",getMovieList);

movieRouter.get("/:id",getSingleMovie)

movieRouter.post("/",fieldsAnalyzer,postMovie)

movieRouter.patch("/:id",record,updateMovie)

movieRouter.delete("/:id",record,deleteMovie)

module.exports={movieRouter}