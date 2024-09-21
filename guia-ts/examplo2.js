var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("no se pueded dividir por cero");
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("el factorial no esta definido para numero negativos");
        }
        if (n === 0) {
            return 1;
        }
        var resultado = 1;
        for (var i = 1; i < n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
//ejemplo de uso de la clase calculadora
var calculadora = new Calculadora();
console.log(calculadora.sumar(5, 4));
console.log(calculadora.restar(4, 1));
console.log(calculadora.multiplicar(5, 3));
console.log(calculadora.dividir(8, 2));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));
