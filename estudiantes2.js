const estudiantes =[
    {nombre:"juam", edad:20, calificacion:85},
    {nombre:"Pedro", edad:33, calificacion:58},
    {nombre:"Maria", edad:41, calificacion:89},
    {nombre:"Antonio", edad:19, calificacion:90},
    {nombre:"Sebastian", edad:28, calificacion:50},
    {nombre:"Esteban ", edad:22, calificacion:30},
]

const filtrarAprobados = (estudiantes)=>{
    return estudiantes.filter(estudiante => estudiante.calificacion>= 70);

   
};

const filtarReprobados = (estudiantes) =>{
    return estudiantes.filter(estudiante => estudiante.calificacion <= 69 );
}

const aprobados = filtrarAprobados(estudiantes);
const reprobado = filtarReprobados(estudiantes);


console.log("Estudiantes Reporbados Son:")
reprobado.forEach(estudiante => console.log(estudiante.nombre))

console.log("Estudiantes Aprobados: ");
aprobados.forEach(estudiante => console.log(estudiante.nombre));