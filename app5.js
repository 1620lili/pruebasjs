//creacion de servidor con javascrip y node

const http = require ('http');
const { text } = require('stream/consumers');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end('Hola Mundo');
    }else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end('Pagina no encontrada')
    }
})

server.listen(3000,()=> {
    console.log('Server escuchando en el puerto 3000')
})