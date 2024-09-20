function celsiusAFahrenheint(celsius){
    return (celsius * 9 / 5) + 32;
}

let celsius = parseFloat(-2);

let fahrenheint = celsiusAFahrenheint(celsius);

console.log("La temperatura en Fahrenheint es:", fahrenheint);

let categoria;
if( fahrenheint >= 14 && fahrenheint <= 32){
    categoria = "Temperatura baja";
}else if ( fahrenheint > 32 && fahrenheint <= 68){
    categoria = "Temperatura adecuada";
}else if( fahrenheint > 68 && fahrenheint <= 96){
    categoria = "Temperatura Alta";
}else{
    categoria = "Desconocida";
}

console.log("La temperatura es:", categoria);

