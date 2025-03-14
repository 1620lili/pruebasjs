

/*function esPrimo(numero){
    if (numero <=1 )
        return false;
        for ( let i = 2 ; i < numero; i++){
            if(numero % i ===0 ){
                return false;
            }
    }

    return true;
}

console.log(esPrimo(7));
console.log(esPrimo(10));*/

const { text } = require("stream/consumers");

//invertir cadena de testo

/*function invertirCadenadeTexto(testo){


    return testo.split("").reverse().join("");

}

console.log(invertirCadenadeTexto("hola"));
console.log(invertirCadenadeTexto("JAVASCRRIPT"));*/


//funcion para calcular factorial de un numero 

function factorial (n){
    if ( n === 0 || n === 1) return 1 ;
    return n * factorial(n - 1);

}


console.log(factorial(5));
console.log(factorial(3));

