/*class Cuenta {
    nombre: string;
    cantidad: number;
    tipoDeCuenta: string;
    numeroDeCuenta: number;

    constructor(nombre: string, cantidad: number, tipoDeCuenta: string, numeroDeCuenta: number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoDeCuenta = tipoDeCuenta;
        this.numeroDeCuenta = numeroDeCuenta
    }

    //metodo a depositar
    depositar(cantidad: number): void{
        if(cantidad < 5.00){
            console.log("El valor a depositar debe ser mayor a $5.00");
        }else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente. saldo actual: $" + this.cantidad);
        }
    }
    //metodo retirar
    retirar(valor: number): void{
        if (valor > this.cantidad){
            console.log("No hay sufuciente saldo en la cuenta.");
        }else if (valor < 5.00){
            console.log("El valor a retirar debe ser mayor a $5.00");
        }else{
            this.cantidad -= valor;
            console.log("se ha retirado $" + valor + ". saldo actual: $" + this.cantidad);
        }
    }
    //metodo mostrar datos
    mostrarDatos(): void{
        console.log(`nombre: ${this.nombre}`);
        console.log(`tipo de cuenta: ${this.tipoDeCuenta}`);
        console.log(`numero de cuenta: ${this.numeroDeCuenta}`);
    }
}
//creacion del obejto
const miCuenta = new Cuenta("juan perez", 100.00, "ahorros", 123456789);

//lamada de los metodos
miCuenta.depositar(20.00);//deposita $20.00
miCuenta.retirar(15.00);//retira $15.00
miCuenta.mostrarDatos();//muestra los datos de la cuenta
*/