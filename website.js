const http = require('http');
const fs = require('fs')

const port =  process.env.port || 3000;

const server = http.createServer((req, res)=> {
    
    res.setHeader('Content-type', 'text/html')
    
    console.log(req.url);

    if(req.url == '/'){
        res.statusCode = 200;
       const data =  fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else if(req.url == '/cws') {
        res.statusCode = 200;
        res.end('<h1> This is CodeWithSanky</h1> <p> Hey this is the way to rock the world!</p>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About CodeWithSanky</h1> <p> Hey This is about CodeWithSanky!</p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey This page is not found on the server!</p>')

    }
});

server.listen(port, ()=> {    
    console.log(`Server is listening on port ${port}`);
});