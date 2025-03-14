function factorial(n){
    let resultado = 1;

    for (let i = 1 ; i <= n; i++){
        resultado *= i;
    }
    return resultado
}

let numero = parseInt(prompt("Ingrese el numero para calcular su factorial: "));

if (!isNaN(numero)&& numero >=0 ){
    console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
}else{
    console.log("Por favor, ingrese un numero valido");
}