const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const cowsay = require("cowsay");

let userCnt = 0; //To count the number of users

//" make the server function and export";
const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.setHeader("Content-type","text/html")
    res.end("<h1>HOME PAGE</h1>")
  }
  else if(req.url==="/say"){
    fs.readFile("./logs.txt",{encoding:"utf-8"},(err,data)=>{
      if(err){
        res.end(err)
      }
      res.end(cowsay.say({
        text:data
      }))
    })
  }
  else if(req.url==="/users"){
    fs.readFile("./data.json","utf-8",(err,data)=>{
      if(err){
        res.end(err)
      }else{
        res.setHeader("Content-type","text/html")
        res.end("Following are the users present in database:"+"\n"+"<ul><li>data.firstname</li></ul>")
        
      }
    })
  }

})

  //Handling the home route, send an h1 tag
 
  //counting the number of users and writing the initial number in the logs.txt along with the time stamp
 
    
  
  //updating the user database
 
    //should append updated number of users in logs.txt along with the time stamp

  //get the first names of all the users from the json file and send as a response in list format

  //to get the website url from terminal and write its ip address and family in logs.txt
 
  // using the cowsay external module
  



// Do not listen to the server just export(default) it
// server.listen(4800,()=>{
//   console.log("server is running on port 4800")
// })

  module.exports=server