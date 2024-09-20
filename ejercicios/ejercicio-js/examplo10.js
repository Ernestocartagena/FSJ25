
const edadesForm = document.getElementById('edadesForm');
        const promedioMañana = document.getElementById('promedioMañana');
        const promedioTarde = document.getElementById('promedioTarde');
        const promedioNoche = document.getElementById('promedioNoche');
        const turnoMayor = document.getElementById('turnoMayor');

        edadesForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const edadesMañana = [
                parseInt(document.getElementById('edadMañana1').value),
                parseInt(document.getElementById('edadMañana2').value),
                parseInt(document.getElementById('edadMañana3').value),
                parseInt(document.getElementById('edadMañana4').value),
                parseInt(document.getElementById('edadMañana5').value)
            ];
            const edadesTarde = [
                parseInt(document.getElementById('edadTarde1').value),
                parseInt(document.getElementById('edadTarde2').value),
                parseInt(document.getElementById('edadTarde3').value),
                parseInt(document.getElementById('edadTarde4').value),
                parseInt(document.getElementById('edadTarde5').value),
                parseInt(document.getElementById('edadTarde6').value)
            ];
            const edadesNoche = [
                parseInt(document.getElementById('edadNoche1').value),
                parseInt(document.getElementById('edadNoche2').value),
                parseInt(document.getElementById('edadNoche3').value),
                parseInt(document.getElementById('edadNoche4').value),
                parseInt(document.getElementById('edadNoche5').value),
                parseInt(document.getElementById('edadNoche6').value),
                parseInt(document.getElementById('edadNoche7').value),
                parseInt(document.getElementById('edadNoche8').value),
                parseInt(document.getElementById('edadNoche9').value),
                parseInt(document.getElementById('edadNoche10').value),
                parseInt(document.getElementById('edadNoche11').value)
            ];

            const promedioTurnoMañana = calcularPromedio(edadesMañana);
            const promedioTurnoTarde = calcularPromedio(edadesTarde);
            const promedioTurnoNoche = calcularPromedio(edadesNoche);

            promedioMañana.textContent = `Promedio del turno mañana: ${promedioTurnoMañana}`;
            promedioTarde.textContent = `Promedio del turno tarde: ${promedioTurnoTarde}`;
            promedioNoche.textContent = `Promedio del turno noche: ${promedioTurnoNoche}`;

            let turnoMayorPromedio = 'Mañana';
            let promedioMayor = promedioTurnoMañana;
            if (promedioTurnoTarde > promedioMayor) {
                turnoMayorPromedio = 'Tarde';
                promedioMayor = promedioTurnoTarde;
            }
            if (promedioTurnoNoche > promedioMayor) {
                turnoMayorPromedio = 'Noche';
                promedioMayor = promedioTurnoNoche;
            }
            turnoMayor.textContent = `El turno con el promedio de edades mayor es: ${turnoMayorPromedio}`;
        });

        function calcularPromedio(edades) {
            let suma = 0;
            for (let i = 0; i < edades.length; i++) {
                suma += edades[i];
            }
            return suma / edades.length;
        }