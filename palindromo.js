function esPalindromo(palabra){
    let palabraLimpia= palabra.tolowerCase().replace(/[^a-z0-9]/g, ""); // Convierte a minúsculas y elimina caracteres especiales
    let palabraInvertida = palabraLimpia.split("").reverse().json("");// Invierte la palabra

}

let testo = prompt("Ingrese una palabra para verificar si es un palindromo");
if(esPalindromo(testo)){
    console.log(`${testo} es un palindromo`);

}else{
    console.log(`${testo}No es un palindromo`)
}