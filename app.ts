import * as http from 'http'

const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end('Hola Mundo HERMOSO ')

    }else {
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Pagina no encontrada')
    }
});

server.listen(3000, ()=>{
    console.log('Servidor escucando en el puerto 300')
});