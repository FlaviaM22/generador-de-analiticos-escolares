export function guardarDatosPersonales() {
    const alumno = {
        apellido: document.querySelector('#apellido').value,
        nombre: document.querySelector('#nombre').value,
        fechaNac: document.querySelector('#fechaNac').value,
        ciudadNac: document.querySelector('#ciudadNac' ).value,
        provinciaNac: document.querySelector('#provinciaNac').value,
        dni: document.querySelector('#dni').value,
        libroMatriz: document.querySelector('#libroMatriz').value,
        folio: document.querySelector('#folio').value
    };

    localStorage.setItem('alumno', JSON.stringify(alumno));
};