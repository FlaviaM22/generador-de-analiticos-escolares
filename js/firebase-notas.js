import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// --- FUNCIÓN PARA GUARDAR DATOS EN FIRESTORE ---
export async function guardarNotasEnFirestore() {

    const datosPorAnio = []; // Array donde guarda todo antes de subirlo a Firebase
    const serie = document.querySelector('#serie')?.value || "";

    // Recorre todos los "tbody" (uno por cada año cursado)
    document.querySelectorAll('tbody').forEach(tbody => {
        const nombreAnio = tbody.querySelector('.anio-cursado td')?.textContent?.trim();
        const filasMaterias = tbody.querySelectorAll('tr:not(.anio-cursado, .curso-promedio)');
        const curso = tbody.querySelector('input[id^="curso"]')?.value || "";
        const promedio = tbody.querySelector('input[id^="promedio"]')?.value || "";

        const materias = [];

        filasMaterias.forEach(fila => {
            const nombreMateria = fila.children[1]?.textContent?.trim();
            const nota = fila.querySelector('select[name^="nota"]')?.value || "";
            const condicion = fila.querySelector('select[name^="condicion"]')?.value || "";
            const mes = fila.querySelector('select[name^="mes"]')?.value || "";
            const anio = fila.querySelector('input[name^="anio"]')?.value || "";
            const establecimiento = fila.querySelector('input[name^="establecimiento"]')?.value || "";          

            if (nombreMateria) {
                materias.push({
                    nombreMateria,
                    nota,
                    condicion,
                    mes,
                    anio,
                    establecimiento
                });
            }
        });

        datosPorAnio.push({
            nombreAnio,
            curso,
            promedio,
            materias
        });
    });

    try {
        const alumnoId = localStorage.getItem("alumnoId");
        // Guardamos la serie, el conjunto de años, las materias y el ID del alumno  en Firestore
        await addDoc(collection(db, "notas"), {
            alumnoId: alumnoId,//Este ID conecta los datos de los dos formularios
            serie,
            datosPorAnio: datosPorAnio,
            fechaGuardado: new Date()
        });

        document.querySelector('#mensaje').innerHTML = `
            <div class="alert alert-success alert-dismissible fade show d-grid gap-2 col-4 mx-auto" role="alert">
                ✅ Los datos se guardaron correctamente.
            </div>
        `;

        // Acá puedo redirigir a otra vista
        // setTimeout(() => window.location.href = "/otra-vista.html", 2000);

    } catch (error) {
        console.error("Error al guardar en Firestore:", error);
        document.querySelector('#mensaje').innerHTML = `
            <div class="alert alert-danger d-grid gap-2 col-4 mx-auto" role="alert">
                ❌ Ocurrió un error al guardar los datos.
            </div>
        `;
    }

}