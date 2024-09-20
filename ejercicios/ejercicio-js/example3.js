function calcularAumento (salario, categoria){
    let aumento = 0;

    const categorias = {
        A: 0.15,
        B: 0.30,
        C: 0.10,
        D: 0.20,
    };  

    if (categorias[categoria]){
        aumento = salario * categorias[categoria];
    } else {
        console.error("categoria invalida");
    }
    return aumento
}

const nombre = "Ernesto";
const salario = 500;
const categoria = "B";

const aumento = calcularAumento(salario, categoria);

console.log(`nombre: ${nombre}`);
console.log(`salario: ${salario}`);
console.log(`categoria: ${categoria}`);
console.log(`aumento: ${aumento}`);

