class CajeroAutomatico {
    constructor(saldoInicial, pinCorrecto){
        this.saldo = saldoInicial;
        this.pin = pinCorrecto;
        this.intentos = 3;
    }
    validarPin (){
        let pinIngresado = document.getElementById("PinInput").value;
        let mensaje = document.getElementById("mensaje");

        if(pinIngresado === this.pin){
            mensaje.textContent = "Acceso Correcto";
            document.getElementById("pin-section").style.display = "none";
            document.getElementById("menu")
        }else{
            this.intentos --;
            mensaje.textContent = `PIN incorrect. Intentos restantes: ${this.intentos}`;
            if(this.intentos === 0){
                mensaje.textContent = "Tarjeta bloqueada";
                document.getElementById ("pinInput").disabled = true;
                
            }
        }
    }

    consultarSaldo(){
        document.getElementById("resultado").textContent= `Su saldo actual es $${this.saldo}`
    }

    depositar(){
        let cantidad = parseFloat(prompt("Ingresa la cantiodad a depositar "));
        if (!isNaN(cantidad)&& cantidad > 0){
            this.saldo += cantidad;
            document.getElementById("resultado").textContent =`Deposito exitoso nuevo saldo $${this.saldo}`;

        }else{
            alert("cantidad invalida")
        }

        retirar(){
            let cantidad = parseFloat(prompt("Ingrese la cantidad a retirar "));
            if (!isNaN(cantidad)&& cantidad >0 && cantidad <= this.saldo){
                this.saldo-=cantidad;
                document.getElementById("resultado").textContent = `retiro Exito. nuevo saldo: $${this.saldo}`;
            }else {
                alert("Fondo Insuficientes o cantidad invalida.");
            }

            
        }
 
    }

    salir(){
        alert("Gracias por usar el cajero automatico.");
    }

}

const cajero = new CajeroAutomatico(1000, "1234")
function validarPin() {
    cajero.validarPin();
}

function consultarSaldo() {
    cajero.consultarSaldo();
}

function depositar() {
    cajero.depositar();
}

function retirar() {
    cajero.retirar();
}

function salir() {
    cajero.salir();
}