function calcularDescuento(){
    const modeloSeleccionado = document.getElementById("modelo").value;

    let descuento = 0;

    switch(modeloSeleccionado){
        case "FIESTA":
        descuento = 0.05;
        break;
        case "FOCUS":
        descuento = 0.10;
        break;
        case "ESCAPE":
        descuento = 0.20;
        break;
        default:
            descuento = 0;
    }

    const resultadoElement = document.getElementById("resultador");
    resultadoElement.innerHTML = `
    <h2>resultado: </h2>
    <p>Modelo Seleccionado: ${modeloSeleccionado}</p>
    <p>Descuento Aplicable: ${descuento * 100}%</p>
    `;
}