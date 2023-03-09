//  import required modules from nodejs 
const http = require("http");
const fs = require("fs");
const path = require("path");

// create the server 

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "." : "." + req.url;

  fs.stat(url, (err, stats) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    } else if (stats.isDirectory()) {
      fs.readdir(url, (err, files) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("<h1>500 Internal Server Error</h1>");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write("<ul>");
          files.forEach((file) => {
            const filepath = path.join(url, file);
            const filestat = fs.statSync(filepath);
            res.write(
              `<li><a href="${filepath}">${file} ${
                filestat.isDirectory() ? "&#128193;" : "&#128441;"
              }</a></li>`
            );
          });
          res.write("</ul>");
          res.end();
        }
      });
    } 
    else {
      const filestream = fs.createReadStream(url);
      filestream.pipe(res);
    }
  });
});

module.exports = server


// export the server 

