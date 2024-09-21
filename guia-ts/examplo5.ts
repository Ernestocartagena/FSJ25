//definimos la clase abstracta Persona
abstract class Persona{
    //atributos de la clase
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: number;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    //metodo para mostrar los datos personales(abstracto)
    abstract mostrarDatosPersonales(): void;

    //metodo para determinar si es mayor de edad
    esMayorDeEdad(): boolean{
        return this.edad >= 18;
    }
}
//definimos la clase Empleado que hereda de Persona
class Empleado extends Persona{
    sueldo: number;

    //constructor de la clase
    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number, sueldo: number){
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }
    //metodo para cargar el sueldo
    cargarSueldo(sueldo: number): void{
        this.sueldo = sueldo;
    }
        //metodo para imprimir el sueldo
        imprimirSueldo(): void{
            console.log(`sueldo: ${this.sueldo}`);
        }
            
    //implementar el metodo abstracto de la clase persona
    mostrarDatosPersonales(): void {
        console.log(`nombre: ${this.nombre}`);
        console.log(`apellido: ${this.apellido}`);
        console.log(`direccion: ${this.direccion}`);
        console.log(`telefono: ${this.telefono}`);
        console.log(`edad: ${this.edad}`);
        console.log(`sueldo: ${this.sueldo}`);
    }
}

//creamos un objeto de la clase Empleado
const empleado = new Empleado("luis", "ruiz", "calle jerusalen 123", 123456789, 2, 1500);

empleado.mostrarDatosPersonales();//imprime los datos del empleado
console.log(`es mayor de edad: ${empleado.esMayorDeEdad()}`);//verificamos si es mayor de edad
empleado.cargarSueldo(6000);//actualiza el sueldo
empleado.imprimirSueldo();//imprime el nuevo sueldo