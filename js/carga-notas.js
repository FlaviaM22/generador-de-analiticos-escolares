const anioActual = new Date().getFullYear(); // Obtener el año actual
const tabla = document.querySelector('table');

//Función que retorna el HTML de cada materia
const retornarMateriaHTML = (materia, index) => {
    return `
        <tr>
            <td class="text-center txt-color">${materia.orden}</td>
            <td class="text-center txt-color">${materia.materia}</td>

            <td>
                <select class="form-select" name="nota[${index}][${materia.materia}]">
                    <option value="" disabled selected>Seleccione una nota</option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="PENDIENTE">PENDIENTE</option>
                </select>
            </td>

            <td>
                <select class="form-select" name="condicion[${index}][${materia.materia}]">
                    <option value="REGULAR" selected>REGULAR</option>
                    <option value="EQUIVALENCIA">EQUIVALENCIA</option>
                </select>
            </td>

            <td>
                <select class="form-select" name="mes[${index}][${materia.materia}]">
                    <option value="FEBRERO">Feb.</option>
                    <option value="MARZO">Mar.</option>
                    <option value="ABRIL">Abr.</option>
                    <option value="MAYO">May.</option>
                    <option value="JUNIO">Jun.</option>
                    <option value="JULIO">Jul.</option>
                    <option value="AGOSTO">Ago.</option>
                    <option value="SEPTIEMBRE">Sep.</option>
                    <option value="OCTUBRE">Oct.</option>
                    <option value="NOVIEMBRE">Nov.</option>
                    <option value="DICIEMBRE" selected>Dic.</option>
                </select>
            </td>

            <td>
                <input class="form-control" type="number" min="1900" max="${anioActual}" name="anio[${index}][${materia.materia}]" pattern="^(19|20)\\d{2}$" title="Ingrese un año válido.">
            </td>

            <td>
                <input class="form-control" list="listaEstablecimiento[${index}][${materia.materia}]" name="establecimiento[${index}][${materia.materia}]">
                <datalist id="listaEstablecimiento[${index}][${materia.materia}]">
                    <option value="ESTE ESTABLECIMIENTO">
                    <option value="OTRO ESTABLECIMIENTO">
                </datalist>
            </td>
        </tr>
    `;
};

//Función que retorna el HTML de un tbody por año
const retornarTBodyHTML = (anioCursado, index) => {
    let html = `
        <tbody>
            <tr class="anio-cursado">
                <td class="fw-bold txt-color" colspan="7">${anioCursado.nivel}° Año</td>
            </tr>
    `;
    anioCursado.materias.forEach(materia => {
        html += retornarMateriaHTML(materia, index);
    });

    html += `
        <tr>
            <td colspan="2">
                <div class="d-flex align-items-center">
                    <div class="col-auto">    
                        <label class="form-label fw-bold txt-color me-2" for="curso[${index}]">CURSO:</label>
                    </div>
                    <div class="col">
                        <input class="form-control form-control-sm" type="text" name="curso[${index}]" placeholder="Esta celda se completa automáticamente" readonly>
                    </div>
                </div>
            </td>

            <td colspan="2">
                <div class="d-flex align-items-center">
                    <div class="col-auto">
                        <label class="form-label fw-bold txt-color me-2" for="promedio[${index}]">PROMEDIO:</label>
                    </div>  
                    <div class="col">
                        <input class="form-control form-control-sm" type="text" name="promedio[${index}]" placeholder="Esta celda se completa automáticamente" readonly>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    `;
    return html;
};

//Función que carga los años y materias desde el JSON
const cargarAlumnoDesdeJSON = async () => {
    try {
        const response = await fetch('/js/alumno.json');
        if (!response.ok) throw new Error("No se pudo cargar el JSON");
        const alumno = await response.json();

        //Completar la serie
        document.getElementById("serie").value = alumno.serie;

        //Cargar años y materias
        alumno.anios.forEach((anio, index) => {
            tabla.innerHTML += retornarTBodyHTML(anio, index);

            //Rellenar valores de nota, condición, mes, año y establecimiento
            anio.materias.forEach(materia => {
                const nombreMateria = materia.materia;

                //Seleccionar select de nota
                const notaSelect = document.querySelector(`select[name="nota[${index}][${nombreMateria}]"]`);
                if (notaSelect) notaSelect.value = materia.nota;

                const condicionSelect = document.querySelector(`select[name="condicion[${index}][${nombreMateria}]"]`);
                if (condicionSelect) condicionSelect.value = materia.condicion;

                const mesSelect = document.querySelector(`select[name="mes[${index}][${nombreMateria}]"]`);
                if (mesSelect) mesSelect.value = materia.mes.toUpperCase();

                const anioInput = document.querySelector(`input[name="anio[${index}][${nombreMateria}]"]`);
                if (anioInput) anioInput.value = materia.anio;

                const establecimientoInput = document.querySelector(`input[name="establecimiento[${index}][${nombreMateria}]"]`);
                if (establecimientoInput) establecimientoInput.value = materia.establecimiento;
            });

            //Completar curso y promedio
            const cursoInput = document.querySelector(`input[name="curso[${index}]"]`);
            if (cursoInput) cursoInput.value = anio.curso || "COMPLETO";

            const promedioInput = document.querySelector(`input[name="promedio[${index}]"]`);
            if (promedioInput) promedioInput.value = anio.promedio;
        });

    } catch (error) {
        console.error("Error al cargar alumno:", error);
    }
};

//Cargar el alumno al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarAlumnoDesdeJSON();

    //Formulario submit
    document.getElementById("form-notas").addEventListener("submit", event => {
        event.preventDefault();
        document.getElementById("mensaje").innerHTML = `
            <div class="alert alert-success alert-dismissible fade show d-grid gap-2 col-4 mx-auto" role="alert">
                ✅ Los datos se guardaron correctamente.
            </div>
        `;
    });
});
