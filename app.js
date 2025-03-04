// como crear un servidor con javascript 

const http = require ('http');

const server = http.createServer ((req , res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});

server.listen(3000, ()=>{
    console.log('servidor correindo en http://localhost:3000');
})