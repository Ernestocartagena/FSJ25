function encontrarMayor (num1, num2){
    //return (num1 > num2) ? num1 : num2;
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
let numero1 = 56;
let numero2 = 34;

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

let mayor = encontrarMayor(numero1, numero2);
console.log("el numero mayor es:", mayor);
