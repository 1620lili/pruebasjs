

let biblioteca =[
    {titulo: "Cien Años de Soledad", autor:"Gabriel Garcia Marquez", año: 1967, prestado: false},
    {titulo: 1984, autor:"George Orwell", año: 1949, prestado: true},
    {titulo: "El principo", autor:"Antoine de saint-Exupery", año: 1943, prestado: false}
];

//funcion flecha àra agregar un nuevo libro 

const agregarLibre =(titulo,autor,año)=>{
    biblioteca.push({titulo, autor, año, prestado:false});
    console.log(`Libreo "${titulo}" agregado a la biblioteca`);
}

// funcion para el prestamo de libros


const prestamoLibro =(titulo)=>{
    const libro = biblioteca.find(libro=>libro.titulo===titulo);
    if(libro){
        if(!libro.titulo){
            libro.prestado = true;
            console.log(`libro "${titulo}" prestado.`);
        }else{
            console.log(`Libro "${titulo}" ya esta prestado ` )
        }

    } else{
        console.log(`Libro "${titulo}" No encontrado`)
    }
};

//funcion para mostrar libros disponibles 

const mostrarLibrosDisponibles = ()=>{
    const disponibles = biblioteca.filter(libro => !libro.prestado);
    console.log("Libros Disponibles:");
    disponibles.forEach(libro => console.log(` -${libro.titulo} (${libro.autor},${libro.año})`

    ));
};

agregarLibre ("El señor de los anillo" , "J.J.R tOLKIEN", 1954);
prestamoLibro ("Cien Años de soledad ")
mostrarLibrosDisponibles()