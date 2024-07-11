// validacion de campos de formulario cuando se carga el dom
const validarPelicula = () => {
    document.getElementById("formPelicula").addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrorMessages();
        //Validar campos
        let titulo = document.getElementById('titulo').value.trim();
        let genero = document.getElementById('genero').value.trim();
        let duracion = document.getElementById('duracion').value.trim();
        let imagen = document.getElementById('imagen').value.trim();
        let isValid = True;
        //Mensajes
        if (titulo === '' || titulo.value == null)  {
            displayErrorMessages ("titulo-error", "* Campo obligatorio");
            isValid = false;
        }
        if (genero === '') {
            displayErrorMessages ("genero-error", "* Campo obligatorio");
            isValid = false;
        }
        if (duracion === '') {
            displayErrorMessages ("duracion-error", "* Campo obligatorio");
            isValid = false;
        }
        if (isValid) {
            alert("Pelicula agregada correctamente");
        }

    });
}


function displayErrorMessages(elementId, message){
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function(element){
        element.innerText = "";
    });
}

document.addEventListener('DOMContentLoaded', validarPelicula);

