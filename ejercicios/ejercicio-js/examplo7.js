
function analizarNumeros() {
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let sumaPares = 0;
  
    for (let i = 0; i < 10; i++) {
      let numero = parseInt(-45);
      if (numero < 0) {
        negativos++;
      } else if (numero > 0) {
        positivos++;
      }
      if (numero % 15 === 0) {
        multiplos15++;
      }
      if (numero % 2 === 0) {
        sumaPares += numero;
      }
    }
  
    console.log("Cantidad de números negativos:", negativos);
    console.log("Cantidad de números positivos:", positivos);
    console.log("Cantidad de múltiplos de 15:", multiplos15);
    console.log("Suma de los números pares:", sumaPares);
  }
  
  analizarNumeros();
  
