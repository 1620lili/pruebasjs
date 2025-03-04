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
            const userId = req.url.split('?userId=')[1]; // Obtener el userId de la URL
    const url = userId
      ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      : 'https://jsonplaceholder.typicode.com/posts';

    const response = await axios.get(url);
    const posts = response.data;

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