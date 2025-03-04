function sumaPrimosN(n){
    let suma = 0;
    for (let i = 1 ; i <= n ; i++){
        suma +=i;
    }
    return suma
}

console.log(sumaPrimosN(5));