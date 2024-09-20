function legalAge(edad){
    return edad >= 18 ? "eres mayor de edad" : "no eres mayor de edad";/* ? operador ternario -> evalua si la condicion es verdadera y : evalua si la condion es falsa */
}

console.log(legalAge(15));
console.log(legalAge(24));
console.log(legalAge(18));

