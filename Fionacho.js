function fionacho(n){

    let = a = 0, b = 1 ;

    for (let i = 0 ; i < n ; i++){
        if (a !== 0){// evitamos que el 0 se considere miltiplo de 0 o de 5 
            if (a % 3 === 0){
                if (a % 5 === 0){
                    console.log("Fionacho");
                }else{
                    console.log("Nacho");
                }
            }else if ( a % 5 === 0){
                console.log("Fio");
            }
            
        }else {
            console.log(a);
        }

        let temp = a + b ;

        a = b;
        b = temp;
    }


    fionacho(20);
}