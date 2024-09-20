function calcularDescuento(){
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let descuento = 0;

    if(origen === "palma"){
        if (destino === "la costa del sol"){
            descuento = 0.05;
        }else if (destino === "panchimalco"){
            descuento = 0.10;
        }else if (destino === "puerta el triunfo"){
            descuento = 0.15;
    }
}

let resultado = document.getElementById("resultado");
if (descuento > 0 ){
    resultado.textContent = `el descuento para este viaje es del ${descuento * 100}%`;
} else {
    resultado.textContent = " no se encontro descuento para este viaje.";
}
}