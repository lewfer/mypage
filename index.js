var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("<!doctype html><html><head><title>MyPage</title></head><h1>This is me</h1></body></html>");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 

