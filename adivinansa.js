function adivinanza(){
    const numeroAleaorio = Math.floor(Math.random()*100)+1;

    let intentos = 0;
    let adivinado = false;
    
    while (!adivinado){
        const numeroUsuario = parseInt(prompt("Adivina el numero ( entre 1 y 100):"));
        intentos ++;
        if (numeroUsuario === numeroAleaorio){
            alert(`¡Felicidades! Adivinaste en ${intentos} Intentos.`);
            adivinado = true;

        }else if (numeroUsuario < numeroAleaorio) {
            alert ( "El numero es mas alto.");
        }

        else {
            alert("El numero es mas bajo");
        }
    }
}

adivinanza();