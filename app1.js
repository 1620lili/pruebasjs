//const { error } = require('console');
const fs = require ('fs');

fs.readFile('texto.txt', 'utf8' , (err, data) => {
    if(err) {
        console.errror('error al leer el archivo' , err);
        return;
    }


console.log('contenido de texto.txt:');
console.log(data);

fs.writeFile('copia.txt',data,(err)=>{
    if(err){
        console.error('erro al escribir el archivo' , err);
        return;
    }
    console.log('El archivo copia.txt se ha creado Correctamente');
})

})