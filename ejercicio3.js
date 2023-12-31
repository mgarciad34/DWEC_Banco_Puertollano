function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}


function navegar(){
    var conversionTarjeta = JSON.stringify(tarjetas);
    localStorage.setItem("tarjetas",conversionTarjeta)
    localStorage.setItem("tarjeta",conversionTarjeta)
}

var saveTarjetas = localStorage.getItem("tarjetas")
var co = JSON.parse(saveTarjetas)
/*
3.1) Cada cuenta puede tener tarjetas de crédito asociadas, las tarjetas están compuestas del 
número de tarjeta y si están activas o no. Esta tabla es dinámica, cuando el usuario guarde una 
tarjeta el contenido de la tabla debe registrar la nueva tarjeta.

3.2) Inicialmente se deben tener cargadas las tarjetas que aparecen por defecto, el campo 
número tarjeta en el apartado de agregar debe seguir el mismo patrón que el mostrado 
anteriormente. El campo CVV debe contener solo 3 dígitos
*/

const tarjeta = document.getElementById("txtNumTarjeta")
const ccv = document.getElementById("txtccv")
var activo = document.getElementById('isactivo')
const msg = document.getElementById('mensaje')
var count = 0;
var datosCuenta = JSON.parse(localStorage.getItem("banco"))

function comprobarTarjeta() {
    const expresionRegular = /^[0-9]{16}$/;
    return expresionRegular.test(tarjeta.value);
}
 
function comprobarCCV() {
    const expresionRegular = /^[0-9]{3}$/;
    return expresionRegular.test(ccv.value);
}

function esActivo(){
    if (activo.checked) {
        return true;
    } else {
        return false;
    }
}


class Tarjeta{
    constructor(numBancaria, numTarjeta, activo) {
        this.numBancaria = numBancaria;
        this.numTarjeta = numTarjeta; 
        this.activo = activo;
    }
}


//Creamos un Array de tarjetas para guardarlas
const tarjetas = []
var tarjeta1 = new Tarjeta(datosCuenta.numCuenta, "1234567891023456", true)
tarjetas.push(tarjeta1)
var tarjeta2 = new Tarjeta(datosCuenta.numCuenta, "1234567891023456", false)
tarjetas.push(tarjeta2)


function guardarTarjeta(){
    resultTarjeta = ""
    resultCcv = ""
    resultado = ""
    if (comprobarTarjeta() === true) {
        count++
        resultTarjeta = tarjeta.value
    }

    if (comprobarCCV() === true) {
        resultCcv = ccv.value
        count++;
    }

    if (esActivo() === true) {
        resultado = "true"
        count++;
    }else{
        resultado = "false"
        count++;
    }
    console.log(count)
    if (count === 3) {
        crearTarjeta = new Tarjeta(datosCuenta.numCuenta, resultTarjeta, resultado)
        tarjetas.push(crearTarjeta)
        msg.innerText = "Datos introducidos en tu cuenta bancaria."
        msg.style.color = "green"
        count = 0;
        llenarTabla();
    } else {
        msg.innerText = "Datos incorrectos al introducir tu tarjeta."
        msg.style.color = "red"
    }
}
   
function llenarTabla() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");

    // Limpiar el cuerpo de la tabla antes de agregar los datos
    cuerpoTabla.innerHTML = "";

    // Iterar a través del array de datos y crear filas de tabla
    tarjetas.forEach((dato) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${dato.numBancaria}</td>
            <td>${dato.numTarjeta}</td>
            <td>${dato.activo}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

window.addEventListener("load", llenarTabla);