const http = require('http');
const axios = require('axios'); 
const { error } = require('console');

// creacion del servidor HTTP
const server = http.createServer(async(req,res)=>{
    //CONFIGURAR EL ENCABEZADO DE LA RESPUESTA 
    res.writeHead(200, {'content-type': 'application/json'});


    //manejar las rutas 

    if(req.url ==='/'){
        res.end(JSON.stringify({mensaje : 'Bienvenido al servidor HTTP'}));
    } else if (req.url === '/post'){
        try {
            // consumir la API de JSONpLACEHOLDER
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data;

            //devolver los posts como respuesta
            res.end(JSON.stringify(posts));
        } catch (error) {
            res.end(JSON.stringify({error: 'Error al obtener los posts '}));
        }
    } else {
        res.end(JSON.stringify({error: 'Ruta No encontrada '}));
    }
});

//Escucahar ene l puerto 3000

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server corriendo en el http://localhost:${PORT}`);
});

// me indica que estamos corriendo en un seerver en el puerto 3000