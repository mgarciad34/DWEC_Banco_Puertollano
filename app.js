
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

    constructor(numTarjeta, numCcv, activo){
      this.numBancaria = "ES21 1465 0100 72 2030876293";
      this,numTarjeta = numTarjeta;
      this.numCcv = numCcv;
      this.activo = activo;
    }
}

//Creamos un Array de tarjetas para guardarlas
const tarjetas = []

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
        resultado = "Si"
        count++;
    }else{
        resultado = "No"
        count++;
    }
    console.log(count)
    if (count === 3) {
        crearTarjeta = new Tarjeta(resultTarjeta, resultCcv, resultado)
        tarjetas.push(crearTarjeta)
        msg.innerText = "Datos introducidos en tu cuenta bancaria."
        msg.style.color = "green"
        count = 0;   
    } else {
        msg.innerText = "Datos incorrectos al introducir tu tarjeta."
        msg.style.color = "red"
    }
    


}
   
