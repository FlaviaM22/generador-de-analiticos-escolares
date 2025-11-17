import { guardarDatosPersonalesFirebase } from "./firebase-datos-personales.js";


document.querySelector('#form-datos-personales').addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        //Se guardan los datos del form en el Firebase
        await guardarDatosPersonalesFirebase();

        //Se informa que los datos se guardaron correctamente
        document.querySelector('#mensaje').innerHTML = `
     <div class="alert alert-success alert-dismissible fade show mt-2 d-grid gap-2 col-8 mx-auto" role = "alert">
     ✅ Los datos se guardaron correctamente.
     </div> 
     `;

        //Redirige a la página de carga de notas luego de 2 1/2" 
        setTimeout(() => {
            window.location.href = '/carga-notas.html';
        }, 2500);

    } catch (error) {
        //Muestra mensaje de error si algo falla
        document.querySelector('#mensaje').innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show mt-2 d-grid gap-2 col-8 mx-auto" role="alert">
      ❌ Ocurrió un error al guardar los datos. Intenta nuevamente.
      </div> 
     `;
    }
});


