function calcularPromedio(){
    const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"));
    let suma = 0;

    for(let i =1; i <= cantidadNotas ; i++){
        const nota = parseFloat(prompt(`Ingresa la nota ${i}:` ));
        suma += nota;
    }

    const promedio = suma / cantidadNotas;
    alert (`El promedio de las notas es:  ${promedio.toFixed(2)}`);
}

calcularPromedio();