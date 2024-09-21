var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//definimos la clase abstracta Persona
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    //metodo para determinar si es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        return this.edad >= 18;
    };
    return Persona;
}());
//definimos la clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    //constructor de la clase
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    //metodo para cargar el sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    //metodo para imprimir el sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("sueldo: ".concat(this.sueldo));
    };
    //implementar el metodo abstracto de la clase persona
    Empleado.prototype.mostrarDatosPersonales = function () {
        console.log("nombre: ".concat(this.nombre));
        console.log("apellido: ".concat(this.apellido));
        console.log("direccion: ".concat(this.direccion));
        console.log("telefono: ".concat(this.telefono));
        console.log("edad: ".concat(this.edad));
        console.log("sueldo: ".concat(this.sueldo));
    };
    return Empleado;
}(Persona));
//creamos un objeto de la clase Empleado
var empleado = new Empleado("luis", "ruiz", "calle jerusalen 123", 123456789, 2, 1500);
empleado.mostrarDatosPersonales(); //imprime los datos del empleado
console.log("es mayor de edad: ".concat(empleado.esMayorDeEdad())); //verificamos si es mayor de edad
empleado.cargarSueldo(6000); //actualiza el sueldo
empleado.imprimirSueldo(); //imprime el nuevo sueldo
