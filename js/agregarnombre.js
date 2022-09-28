// Variables
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario1');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     formulario.addEventListener('submit', agregarTweet);

     // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          tweets = JSON.parse( localStorage.getItem('tweets') ) || []  ;
          console.log(tweets);
          crearHTML();
     });
}

// Añadir tweet del formulario
function agregarTweet(e) {
     e.preventDefault();
     // leer el valor del textarea
     const tweet = document.querySelector('#tweet').value;
     
     // validación
     if(tweet === '') {
          mostrarError('Un mensaje no puede ir vacio');
          return;
     }

     // Crear un objeto Tweet
     const tweetObj = {
          id: Date.now(),
          texto: tweet
     }

     // Añadirlo a mis tweets
     tweets = [...tweets, tweetObj];
     
     // Una vez agregado, mandamos renderizar nuestro HTML
     crearHTML();

     // Reiniciar el formulario
     formulario.reset();
}

function mostrarError(error) {
     const mensajeEerror = document.createElement('p');
     mensajeEerror.textContent = error;
     mensajeEerror.classList.add('error');

     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeEerror);

     setTimeout(() => {
          mensajeEerror.remove();
     }, 3000);
}

function crearHTML() {
     limpiarHTML();
     
     if(tweets.length > 0 ) {
          tweets.forEach( tweet =>  {
               // crear boton de eliminar
               const botonBorrar = document.createElement('a');
               botonBorrar.classList = 'borrar-tweet';
               botonBorrar.innerText = 'X';
     
               // Crear elemento y añadirle el contenido a la lista
               const li = document.createElement('li');

               // Añade el texto
               li.innerText = tweet.texto;

               // añade el botón de borrar al tweet
               li.appendChild(botonBorrar);

               // añade un atributo único...
               li.dataset.tweetId = tweet.id;

               // añade el tweet a la lista
               listaTweets.appendChild(li);
          });
     }

     sincronizarStorage();
}

// Elimina el Tweet del DOM
function borrarTweet(e) {
     e.preventDefault();

     Swal.fire({
          title: 'Criptomoneda borrada!.',
          text: 'Puedes seguir agregando criptos',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

     // console.log(e.target.parentElement.dataset.tweetId);
     const id = e.target.parentElement.dataset.tweetId;
     tweets = tweets.filter( tweet => tweet.id != id  );
     crearHTML();
}

// Agrega tweet a local storage
function sincronizarStorage() {
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina los cursos del carrito en el DOM
function limpiarHTML() {
     while(listaTweets.firstChild) {
          listaTweets.removeChild(listaTweets.firstChild);
     }
}










































/* //Variables
const formulario2 = document.querySelector('#formulario2');
const muestra = document.querySelector('#muestra-nombre');
const storedName = localStorage.getItem('nombre')

let nombre = [];



//Event Listeners
eventListener()
function eventListener() {
    formulario2.addEventListener('submit', agregarNombre);

    document.addEventListener('DOMContentLoaded', () => {
        nombre = JSON.parse( localStorage.getItem('nombre'));
       
    })
}


//Funciones
/* function agregarNombre(e) {
    e.preventDefault();

    //Input donde el usuario escribe su nombre
    const nombreAgregado = document.querySelector('#nombre').value;
    const mostrarNombre = document.createElement('label');
    mostrarNombre.innerHTML = nombreAgregado;
    formulario2.appendChild(mostrarNombre);
    

    if(nombreAgregado === ''){
        mostrarMsgError('No se agregó ningún nombre');
        return;
    }
    console.log(nombreAgregado)

    //Se reinicia el formulario para enscribir nuevamente.
    formulario2.reset();
} */

/*
function mostrarMsgError(error){
    const msgError = document.createElement('p');
    msgError.textContent = error;
    msgError.classList.add('error');

    //Insertar el mensaje de error
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msgError);

    //Elimina mensaje de error después de 3 seg.
    setTimeout(() => {
        msgError.remove();
    }, 3000);
}


 */