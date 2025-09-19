//Informo que los datos se guardaron correctamente
document.querySelector('#form-datos-personales').addEventListener('submit', function(event){
    event.preventDefault();
    
    document.querySelector('#mensaje').innerHTML = `
     <div class="alert alert-success alert-dismissible fade show mt-3 role = "alert">
     ✅ Los datos se guardaron correctamente.
     </div> 
    `;

    setTimeout(() => {
        window.location.href = '/carga-notas.html';
    }, 2500);//Redirijo a la página de carga de notas luego de 2 1/2" para que se llegue a leer el cartel de éxito

});


