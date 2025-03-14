class CajeroAutomatico {
    constructor(saldoInicial, pinCorrecto) {
        this.saldo = saldoInicial;
        this.pin = pinCorrecto;
    }

    validarPin() {
        let intentos = 3;
        while (intentos > 0) {
            let pinIngresado = prompt("Ingrese su PIN:");
            if (pinIngresado === this.pin) {
                alert("Acceso Correcto");
                this.mostrarMenu();
                return;
            } else {
                intentos--;
                alert(`PIN incorrecto. Intentos restantes: ${intentos}`);
            }
        }
        alert("Se han agotado los intentos. Tarjeta bloqueada.");
    }

    mostrarMenu() {
        let opcion;
        do {
            opcion = prompt(
                "Seleccione una opción:\n" +
                "1. Consultar saldo\n" +
                "2. Depositar dinero\n" +
                "3. Retirar dinero\n" +
                "4. Salir"
            );

            switch (opcion) {  // CORREGIDO: Se usa 'opcion' correctamente
                case "1":
                    this.consultarSaldo();
                    break;
                case "2":
                    this.depositar();
                    break;
                case "3":
                    this.retirar();
                    break;
                case "4":
                    alert("Gracias por usar el cajero automático.");
                    break;
                default:
                    alert("Opción inválida. Intente de nuevo.");
            }
        } while (opcion !== "4");
    }

    consultarSaldo() {  // CORREGIDO: Ahora está dentro de la clase
        alert(`Su saldo actual es: $${this.saldo}`);
    }

    depositar() {
        let cantidad = parseFloat(prompt("Ingrese la cantidad a depositar:"));
        if (!isNaN(cantidad) && cantidad > 0) {
            this.saldo += cantidad;
            alert(`Depósito exitoso. Nuevo saldo: $${this.saldo}`);
        } else {
            alert("Cantidad inválida.");
        }
    }

    retirar() {
        let cantidad = parseFloat(prompt("Ingrese la cantidad a retirar:"));
        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            alert(`Retiro exitoso. Nuevo saldo: $${this.saldo}`);
        } else {
            alert("Fondos insuficientes o cantidad inválida.");
        }
    }
}

// Crear una instancia del cajero automático
const cajero = new CajeroAutomatico(1000, "1234");
cajero.validarPin();
