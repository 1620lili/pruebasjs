function esprimo(num){
    if (num <= 1) 
        return false;
    for ( let i = 2 ; i<= Math.sqrt(num);i++){
        if (num % i === 0)

            return false;
            
    }
    return true;
}

function primosEnRanfo(a,b){
    let primos = [];
    for( let i = a; i<=b; i++){
        if(esprimo(i)){
            primos.push(i);
        }
    }

    return primos;
}

console.log(primosEnRanfo(10 ,30));