function calcularNota(examns, taks, attendance, research){
    let notaFinal = (examns * 0.2) + (taks * 0.4) + (attendance * 0.1) + (research * 0.3);

    return notaFinal;
}

let nota = {
    examns: 80,
    taks: 56,
    attendance: 33,
    research: 56
};

let notaFinal = calcularNota(nota.examns, nota.taks, nota.attendance, nota.research);

console.log(`nota: ${notaFinal.toFixed(2)}`);


