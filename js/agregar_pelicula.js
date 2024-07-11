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

ocument.addEventListener('DOMContentLoaded', async() => {
    const options = {
        method: 'GET',
        header: {
            'Content-Type' : 'application/json'
        }
    };
    const response = await fetch('', options);
    const data = await response.json();
    const movies = data;

    const tbody = document.getElementById('bodyTablePeliculas');
    /*Recorrer pelicula y agregar fila*/
    movies.forEach(movie => {      
    const tr = document.createElement('tr');
    const tdIdPelicula = document.createElement('td');
    tdIdPelicula.textContent = movie.idPelicula;
    const tdTitulo = document.createElement('td');
    tdTitulo.textContent = movie.titulo;
    const tdDuracion = document.createElement('td');
    tdDuracion.textContent = movie.duracion;
    const tdGenero = document.createElement('td');
    tdGenero.textContent = movie.genero;
    const tdImagen = document.createElement('td');
    const img = document.createElement('img');
    img.src = "../assets/img"+ movie.imagen; 
    img.with = '150';
    tdImagen.appendChild(img);
    img.classList.add('img-fluid');
    img.classList.add('img-thumbnail')
    tr.appendChild(tdIdPelicula);
    tr.appendChild(tdTitulo);
    tr.appendChild(tdDuracion);
    tr.appendChild(tdGenero);
    tr.appendChild(tdImagen);
    tbody.appendChild(tr);
    });
});