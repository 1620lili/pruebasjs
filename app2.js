const http = require('http');

// crear el servidor HTTP 

const server = http.createServer((req,res)=>{
    //configurar el encabezado de la respues//
    res.writeHead(200 ,{'content-type': 'text/plain'});


    //Manejar las rutas
    if(req.url == '/'){
        res.end('Bienvenido al servidor HTTP') ;
    }else if (req.url.startsWith('/saludo')){
        // Obterner el nombre del parametro en la URL
        const nombre = req.url.split('/')[2] || 'Usuario';
        res.end(`Hola , ${nombre}!`);
    }else {
        res.end('Ruta no encontrada');
    }
});

//Escuchar en el puerto 3000

const PORT = 3000;
server.listen(PORT ,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});