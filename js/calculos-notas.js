// --- CÁLCULO AUTOMÁTICO DE PROMEDIO Y CURSO ---
export function inicializarCalculosNotas() {
    const formNotas = document.querySelector('#form-notas');

    formNotas.addEventListener('change', () => {
        const anios = document.querySelectorAll('tbody'); //Cada año cursado
        anios.forEach((tbody, index) => {
            const filasMaterias = tbody.querySelectorAll('tr:not(.anio-cursado):not(.curso-promedio)');
            let suma = 0;
            let cantidad = 0;
            let cursoCompleto = true;

            filasMaterias.forEach(fila => {
                const selectNota = fila.querySelector('select[name^="nota"]');
                if (!selectNota) return;

                const valor = selectNota.value;

                if (valor === "PENDIENTE" || valor === "") {
                    cursoCompleto = false; // hay una materia pendiente o sin nota
                } else {
                    suma += parseInt(valor);
                    cantidad++;
                }
            });

            // Calcular promedio
            const promedioInput = tbody.querySelector(`input[id^="promedio"]`);
            if (cantidad > 0) {
                const promedio = (suma / cantidad).toFixed(2);
                promedioInput.value = promedio;
            } else {
                promedioInput.value = "";
            }

            // Calcular curso completo/incompleto
            const cursoInput = tbody.querySelector(`input[id^="curso"]`);
            cursoInput.value = cursoCompleto ? "Completo" : "Incompleto";
        });

        calcularSerie(); //Actualiza la serie general
    });
}


export function calcularSerie() {
    const inputSerie = document.querySelector('#serie');
    const inputsAnios = document.querySelectorAll('input[name^="anio"]');
    let maxAnio = 0;

    inputsAnios.forEach(input => {
        const valor = parseInt(input.value);
        if (!isNaN(valor) && valor > maxAnio) {
            maxAnio = valor;
        }
    });

    inputSerie.value = maxAnio > 0 ? maxAnio : "";
}
