import { guardarDatosPersonales } from "./local-storage-datos-personales.js";


document.querySelector('#form-datos-personales').addEventListener('submit', function(event){
    event.preventDefault();
    //Guardo los datos del form en el localStorage
    guardarDatosPersonales();

    //Informo que los datos se guardaron correctamente
    document.querySelector('#mensaje').innerHTML = `
     <div class="alert alert-success alert-dismissible fade show mt-2 d-grid gap-2 col-8 mx-auto" role = "alert">
     ✅ Los datos se guardaron correctamente.
     </div> 
    `;

    //Redirijo a la página de carga de notas luego de 2 1/2" para que se llegue a leer el cartel de éxito
    setTimeout(() => {
        window.location.href = '/carga-notas.html';
    }, 2500);

});


