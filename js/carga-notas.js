//Valido que el año de aprobación de la materia no sea mayor al año actual
const anioActual = new Date().getFullYear();//Obtener el año actual

const inputs = document.querySelectorAll('input[name^="anio"]');//Obtener todos los inputs que comiencen con el name "anio"

inputs.forEach(input => { //Asignarle a cada uno un max dinámico igual al año actual
    input.max = anioActual;
});


//Esta función retorna el HTML de un tbody con las materias de un año cursado
const retornarTBodyHTML = (anioCursado) => {
    return `
            <tbody class="anioCursado">

                <tr>
                    <td colspan="7"><strong>${anioCursado.nombre}</strong></td>
                </tr>                
                <tr>
                    <td>
                        <label for="estado[1][cursada]">CURSADA</label>
                        <input type="text" name="estado[1][cursada]" id="estado[1][cursada]">
                    </td>
                    <td>
                        <label for="promedio[1]">PROMEDIO:</label>
                        <input type="text" name="promedio[1]" id="promedio[1]">
                    </td>
                </tr>

            </tbody>`
};
//Esta función retorna el HTML del div class materia con las materias de cada año
const retornarMateriaHTML = (materia) => {
    return `
            <div class="materia">
                    <tr>
                        <td>${anioCursado.materias.orden}</td>
                        <td>${anioCursado.materias.nombre}</td>
                        <td>
                            <select name="nota[1][naturales]">
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
                            <select name="condicion[1][naturales]">
                                <option value="REGULAR" selected>REGULAR</option>
                                <option value="EQUIVALENCIA">EQUIVALENCIA</option>
                            </select>
                        </td>
                        <td>
                            <select name="mes[1][naturales]">
                                <option value="FEBRERO">Feb.</option>
                                <option value="MARZO">Mar.</option>
                                <option value="ABRIL">Abr.</option>
                                <option value="MAYO">May.</option>
                                <option value="JUNIO">Jun.</option>
                                <option value="JULIO">Jul.</option>
                                <option value="AGOSTO">Ago.</option>
                                <option value="SEPTIEMBRE">Sep.</option>
                                <option value="OCTUBRE">Oct.</option>
                                <option value="NOVIEMRE">Nov.</option>
                                <option value="DICIEMBRE" selected>Dic.</option>
                            </select>
                        </td>
                        <td><input type="number" min="1900" name="anio[1][naturales]" pattern="^(19|20)\d{2}$"
                                title="Ingrese un año válido." required></td>
                        <td>
                            <input list="listaEstablecimiento1Naturales" name="establecimiento[1][Naturales]">
                            <datalist id="listaEstablecimiento1Naturales">
                                <option value="ESTE ESTABLECIMIENTO">
                                <option value="OTRO ESTABLECIMIENTO">
                            </datalist>
                        </td>
                    </tr>
                </div>`
};


const contenedorAnios = document.querySelector('.anioCursado');
const contenedorMateriasAnio = document.querySelector('.materia');

//Esta función carga los años cursados en el contenedorAnios y llama a la función retornarTBodyHTML
const cargarAniosYmaterias = (array) => {
    //contenedorAnios.innerHTML = "";//Esta línea limpia el contenedor antes de cargar los productos para evitar duplicados    
    array.forEach(anioCursado => {
        contenedorAnios.innerHTML += retornarTBodyHTML(anioCursado)
        array.forEach(materia => {
            contenedorMateriasAnio.innerHTML += retornarMateriaHTML(materia)
        });
    });
};

//Llamada a la función para cargar los años
cargarAniosYmaterias(aniosCursados);



