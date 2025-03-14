function fibonacci(n){
    let fib = [0 ,1];

    for (let i = 2; i <n ;i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib;
}

let numero = parseInt(prompt("Ingresa la cantidad de numeros Fibonacci a generar "));

if ( !isNaN(numero)&& numero >0){
    console.log("Serie de Fibonacci" , fibonacci(numero));
}else{
    console.log("Por favor Ingrese un numero valido ")
}