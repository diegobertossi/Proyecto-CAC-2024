//Ejemplo de codigo sincrónico
/* console.log("esto imprime primero");
console.log("esto imprime segundo"); */

//Ejemplo de codigo asincrónico
/* console.log("esto imprime primero");
setTimeout(function(){console.log("esto se imprime ultimo")},5000);
console.log("esto imprime segundo");
console.log("esto imprime segundo");
console.log("esto imprime segundo");
console.log("esto imprime segundo");
console.log("esto imprime segundo");
console.log("esto imprime segundo"); */

// Fetch
// al no cargar el segundo parametro por defecto hacemos una peticion GET

fetch("https://rickandmortyapi.com/api/character/1")
// El primer .then recibe la cadena string (json) y la predispone a transformar a objeto 
// .then recibe como parametro una funcion con su propio parametro
.then(function(respuesta){
//transformamos el json en objeto
return respuesta.json();
})
.then(function(datos){
console.log(datos.name, datos.image, datos.origin.name);
})
.catch(function(error){
    console.error(error);
})

// Declaramos una función que renderiza elementos en el DOM
function pedirDatos(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(personajes){
        // Traemos el espacio de renderizado
        const contenedor = document.getElementById("contenedor-tarjetas");

        // Utilizamos un for-each
        personajes.results.forEach(function(dato){
            //Creamos el elemento html
            const article = document.createElement('article');
            //Agregamos estilo a article
            article.classList.add("tarjeta");
            //Inyectamos contenido a <article>
            article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>
            `
            //Adjuntamos el contenido 
            contenedor.appendChild(article);
        })

    })
    .catch(function(error){
        console.error(error);
    })
}

// Llamamos a la función
pedirDatos();



