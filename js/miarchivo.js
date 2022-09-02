const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: '',
}

//Obtener Criptomonedas

//const obtenerCriptomonedas = criptomonedas

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});





//Consultas
function consultarCriptomonedas() {
    const url = 'http://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'


}

function consultarCRIPTOS() {
    
}


//Llenar el select
function selectCriptomonedas() {
    criptomonedas.forEach( cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        //Insrtar el HTML 
        criptomonedasSelect.appendChild(option);
    });
} 


function submitFormulario(e) {
    e.preventDefault();

    //Validar
    const { moneda, criptomoneda } = objBusqueda;
    
    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

///////////////////////////////////
}


//Alerta al no ingresar cualquiera de los campos
function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error');

    if(!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');

        //Mensaje de error
        divMensaje.textContent = msg;

        //Insertar en el DOM
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove()    
        }, 3000);
    }
}




function mstrarCotizaciónHTML() {

    
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}




function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.remove(resultado.firstChild)
    }
}


function mostrarSpinner() {

    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div> 
    `;

    resultado.appendChild(spinner);
}
