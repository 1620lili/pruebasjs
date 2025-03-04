const estudiantes = [];

function agregarEstudiantes (nombre, edad, notas){
    const estudiante ={
        nombre : nombre,
        edad : edad,
        notas: notas,
    };

    estudiantes.push(estudiante);
    console.log (`Estudiante ${nombre} Agregado Correctamente.`);
}
    // funcion para calcular pormedio 

    function calcularPromedio2(notas) {
        let suma= 0;
        for ( let i = 0; i < notas.length; i++){
            suma += notas[i];
        }

        return suma /notas.length;
    }

    //funcion para mostrar la lista de los estudiantes

    function mostrarEstudiantes(){
        console.log("Lista de estudiantes ");

        for (let i = 0; i< estudiantes.length;i++){
            const  estudiante = estudiantes[i];
            const promedio = calcularPromedio2(estudiante.notas);
            console.log (`
                Nombre: ${estudiante.nombre}
                Edad: ${estudiante.edad}
                Promedio: ${promedio.toFixed(2)}
                
                `);
        }
    }


agregarEstudiantes("Juan", 20, [10, 8, 9]);
agregarEstudiantes("Ana", 22, [7, 9, 10]);
agregarEstudiantes("Carlos", 21, [8, 7, 6]);


mostrarEstudiantes();