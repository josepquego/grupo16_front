
// validacion de campos de formulario cuando se carga el dom
document.addEventListener('DOMContentLoaded', function() {

    const formPelicula = document.getElementById('formPelicula');
    formPelicula.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const genero = document.getElementById('genero').value;
        const duracion = document.getElementById('duracion').value;
        const imagen = document.getElementById('imagen').value;
        // verificar si los campos estan vacios
        // si alguno de los campos esta vacio se muestra un mensaje de error en el div correspondiente al input
        // levanto los campos de error
        const errorTitulo = document.getElementById('error-titulo');
        const errorGenero = document.getElementById('error-genero');
        const errorDuracion = document.getElementById('error-duracion');
        console.log("entro a la funcion");
        // limpio los mensajes de error
        errorTitulo.innerText = "";
        errorGenero.innerText = "";
        errorDuracion.innerText = "";


        if (titulo.value === '' || titulo.value == null) {
            e.preventDefault();
            errorTitulo.innerText = "El título de la película es obligatorio";
        }
        if (genero.value === '' || genero.value == null) {
            e.preventDefault();
            errorGenero.innerText = "El género es obligatorio";
        }
        if (duracion.value === '' || duracion.value == null) {
            e.preventDefault();
            errorDuracion.innerText = "La duración de la película es obligatoria";
        }

      
        // objeto literal de pelicula 
        // pegar a la api POST /peliculas

    });
});