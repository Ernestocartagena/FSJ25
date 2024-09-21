/*class Calculadora{
    sumar (a: number, b: number): number{
        return a + b;
    }
    restar(a: number, b: number): number{
        return a - b;
    }
    multiplicar(a: number, b: number): number{
        return a * b;
    }
    dividir(a: number, b: number): number{
        if( b === 0){
            throw new Error("no se pueded dividir por cero");
        }
        return a / b;
    }
    potencia(base: number, exponente: number): number{
        return Math.pow(base, exponente);
    }

    factorial(n: number): number{
        if (n < 0){
            throw new Error("el factorial no esta definido para numero negativos");
        }
        if ( n === 0){
            return 1;
        }
        let resultado = 1;
        for (let i = 1; i < n; i++){
            resultado *= i;
        }
        return resultado;
    }
}
//ejemplo de uso de la clase calculadora
const calculadora = new Calculadora();

console.log(calculadora.sumar(5, 4));
console.log(calculadora.restar(4, 1));
console.log(calculadora.multiplicar(5, 3));
console.log(calculadora.dividir(8, 2));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));
*/
