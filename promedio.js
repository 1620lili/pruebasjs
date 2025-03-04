const estudiantes =[
    {nombre:"juam", edad:20, calificacion:85},
    {nombre:"Pedro", edad:33, calificacion:58},
    {nombre:"Maria", edad:41, calificacion:89},
    {nombre:"Antonio", edad:19, calificacion:90},
    {nombre:"Sebastian", edad:28, calificacion:50},
    {nombre:"Esteban ", edad:22, calificacion:30},
]

//funcion flecha para calcular el promedio de las calificaciones 

const calcularPromedio = (estudiantes)=>{
    const total = estudiantes.reduce((acumulador, estudiante)=> acumulador +estudiante.calificacion,0);
    return total / estudiantes.length;
};

const promedio = calcularPromedio(estudiantes);
console.log(`El promedio de calificaciones es : ${promedio}`);