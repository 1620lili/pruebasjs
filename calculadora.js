function calculadora(){

    
   
    const operacion = prompt("Seleciona una operacion : Sumar, Restar, Multiplicar,Dividir")

 
    const numero1 = parseFloat(prompt("Ingresa el primer Numero"));
    
    console.log("hOLA mUNDO");
    const numero2 = parseFloat(prompt("Ingresa el Segundo Numero"));

    let resultado ;

    switch (operacion) {
        case "Sumas" :
        resultado = numero1 + numero2;
            break;

        case "Restar" :
            resultado = numero1 - numero2;
            break;

        case "Multiplicar" :
            resultado = numero1 * numero2;
            break;

        case "Dividir" : 
        resultado = numero1 / numero2;
        break;
        
        default :
        alert("Operacion no Valida ");
    }

    alert (`El Resultado es : ${resultado}`);

}

calculadora();