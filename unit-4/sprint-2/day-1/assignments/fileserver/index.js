const http = require("http")
const fs = require("fs")
const psth = require("path")

const hostname = "localhost"
const port = 4100

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        const drictories = fs.readFileSync(__directname)
        let responses = '<ul>'
        drictories.forEach(direc =>{
            responses += `<li><a herf="${res.url}${direc}">${direc}</a></li>`
        })
        responses += '</ul>'

        res.setHeader('Content-Type','text/html')
        res.end(response )
    }
    else {
        const requestedPath = path.join(__directname, req.url.replace('/', ''))
        if (fs.existsSync(requestedPath)) {
          if (fs.lstatSync(requestedPath).isDirectory()) {
            const directories = fs.readdirSync(requestedPath)
            let response = '<ul>'
            directories.forEach(directory => {
              response += `<li><a href="${req.url}/${directory}">${directory}</a></li>`
            })
            response += '</ul>'
            
            res.setHeader('Content-Type', 'text/html')
            res.end(response)
          } else {
            
            res.setHeader('Content-Type', 'text/plain')
            res.end(fs.readFileSync(requestedPath))
          }
        } else {
        
          res.end('Not found')
        }
      }
    })
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`)
    })
