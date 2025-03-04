function calcularSuledoNeto(){
    const sueldoBase = parseFloat(prompt("Ingrese elñ sueldo base"));
    const deduciones = parseFloat(prompt("Ingrese el porcentaje de deduciones(%):"));
    const bonificaciones = parseFloat(promp("Ingrese el monto de las bonificaciones"));


    const montoDeduciones = sueldoBase * (deduciones/100);
    
}