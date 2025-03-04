let n = parseInt(prompt("ingrese el numero de terminos de la secuencia de Fibonacci"));

let a = 0,b = 1;
let contador = 0;
while (contador < n) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
        contador ++;
    
}