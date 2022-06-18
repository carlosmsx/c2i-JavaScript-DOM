//inicializo variables globales

let numeroGenerado = 0;

//inicializo variables para manejar los objetos de la vista
let botonInicio = document.getElementById("botonInicio");
let botonFin = document.getElementById("botonFin");
let numeroIngresado = document.getElementById("numeroIngresado");
let botonEnviar = document.getElementById("botonEnviar");
let alertPlaceholder = document.getElementById('liveAlertPlaceholder')

//guardo los valores de clases como fueron maquetados
let botonInicioClass = botonInicio.className;
let botonFinClass = botonFin.className;
let numeroIngresadoClass = numeroIngresado.className;
let botonEnviarClass = botonEnviar.className;

//funciones 
function alert(message, type) 
{
    alertPlaceholder.innerHTML = "";
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}
  
function generarNumero()
{
    return Math.floor(Math.random()*100)+1;
}

function iniciarJuego()
{
    numeroGenerado = generarNumero();
    alertPlaceholder.innerHTML = "";
    botonInicio.className = botonInicioClass + " disabled";
    botonFin.className = botonFinClass;
    botonEnviar.className = botonEnviarClass;
    numeroIngresado.className = numeroIngresadoClass;
}

function terminarJuego()
{
    botonInicio.className = botonInicioClass;
    botonFin.className = botonFinClass + " disabled";
    botonEnviar.className = botonEnviarClass + " disabled";
    numeroIngresado.className = numeroIngresadoClass + " disabled";
    if (numeroGenerado != 0)
    {
        alert(`El número secreto era ${numeroGenerado}`, `success`);
    }
}

function enviarNumero()
{
    let numero = parseInt(numeroIngresado.value);
    
    if (isNaN(numero))
    {
        alert("Ingrese un número válido", "warning");
    }
    else if(numero < 1 || numero > 100)
    {
        alert("Ingrese solo números entre 1 y 100", "warning")
    }
    else if (numero < numeroGenerado) 
    {
        alert("El número secreto es mayor", "warning");
    }
    else if (numero > numeroGenerado)
    {
        alert("El número secreto es menor", "warning");
    }
    else
    {
        terminarJuego();
        alert("Adivinaste!!!", "success");
    }
}

terminarJuego(); //iniciar en estado terminado
