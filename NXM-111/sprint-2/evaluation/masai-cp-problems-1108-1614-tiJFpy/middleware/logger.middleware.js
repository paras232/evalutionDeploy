const fs=require("fs")
function logger(req,res,next){
    let METHOD = req.method;
    let ROUTE = req.originalURL
    console.log(ROUTE)
    let user_agent = req.headers["user-agent"]
    let data = `Method:${METHOD} | Route: ${ROUTE} | user-agent: ${user_agent} \n`
    fs.appendFileSync("./logs.txt",data)

    next()
}

module.exports={logger}
// write the logic for logger middleware and export it.