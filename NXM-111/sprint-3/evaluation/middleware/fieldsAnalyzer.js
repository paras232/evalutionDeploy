const fieldsAnalyzer=(req, res, next)=>{
    const {movie_name, genre, director, rating, year_of_release}=req.body
    if(!movie_name || !genre || !director || !rating || !year_of_release){
        res
           .status(401)
           .json({ err: "few field are missing, cannot process the request"})
    }else if(
        typeof movie_name !== "string" || typeof genre !== "string" || typeof director !== "string" || typeof rating !== "number" || typeof year_of_release !== "number"
    ){
        res
           .status(401)
           .json({ err: "Few field are missing, cannot process the request"})
    }else{
        next()
    }
}

module.exports={fieldsAnalyzer}
