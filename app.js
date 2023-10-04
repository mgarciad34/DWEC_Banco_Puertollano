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
2.1) Por defecto vendrá cargado un iban y un saldo de 500 euros, los campos iban y saldo 
estarán deshabilitados, por lo que no podrán ser editables por el usuario.
Cuando se realice se pulse el botón Retirar se restará el saldo introducido, se comprobará que 
es un número lo que se ha introducido y que la cantidad a retirar no es mayor al saldo.
Si se pasa la validación se mostrará un mensaje en verde de que se ha retirado el saldo 
correctamente.
*/

const iban = document.getElementById("txtiban");
const saldoFijo = document.getElementById("txtsaldo");
const cantidadRetirar = document.getElementById("txtretirar");
const cantidadIngresar = document.getElementById("txtingresar");
const mensaje = document.getElementById("mensaje");

function retirarDinero(){
    const cantidadRetiro = parseFloat(cantidadRetirar.value);
    const saldo = parseFloat(saldoFijo.value);

    if (isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
        mensaje.innerText = "Cantidad no válida.";
        mensaje.style.color = "red";
    } else if (cantidadRetiro > saldo) {
        mensaje.innerText = "No tienes suficiente saldo para realizar este retiro.";
        mensaje.style.color = "red";
    } else {
        const nuevoSaldo = saldo - cantidadRetiro;
        saldoFijo.value = nuevoSaldo.toFixed(2);
        mensaje.innerText = `Retirado: ${cantidadRetiro.toFixed(2)} euros. Nuevo saldo: ${nuevoSaldo.toFixed(2)} euros.`;
        mensaje.style.color = "green";
        cantidadRetirar.value = "";
    }
    if (cantidadRetirar.value === "" && cantidadIngresar.value !== "") {
        cantidadIngresar.value = "";
    }
}

/*
2.2) Cuando se ingrese dinero al igual que en retirar se comprobará que es un número y se 
mostrará un mensaje en verde de que el dinero ha sido ingresado correctamente.
*/

function ingresarDinero() {
    const cantidadIngreso = parseFloat(cantidadIngresar.value);
    const saldo = parseFloat(saldoFijo.value);
    const mensaje = document.getElementById("mensaje");

    if (isNaN(cantidadIngreso) || cantidadIngreso <= 0) {
        mensaje.innerText = "Cantidad no válida.";
        mensaje.style.color = "red";
    } else {
        const nuevoSaldo = saldo + cantidadIngreso;
        saldoFijo.value = nuevoSaldo.toFixed(2);
        mensaje.innerText = `Ingresado: ${cantidadIngreso.toFixed(2)} euros. Nuevo saldo: ${nuevoSaldo.toFixed(2)} euros.`;
        mensaje.style.color = "green";
        cantidadIngresar.value = "";
    }

    if (cantidadIngresar.value === "" && cantidadRetirar.value !== "") {
        cantidadRetirar.value = "";
    }
}
class Persona {

    constructor(nombre, apellido1, apellido2, nacionalidad) {
      this._nombre = nombre;
      this._apellido1 = apellido1;
      this._apellido2 = apellido2;
      this._nacionalidad = nacionalidad;
    }
}


/*
1.1) El botón Modificar Datos en caso de éxito debe volcar la información de al objeto persona
y mostrar un mensaje en la parte inferior “Guardado los datos correctamente” en color
verde
*/

const nombre = document.getElementById('txtname');
const apellido1 = document.getElementById('txtsubnameone')
const apellido2 = document.getElementById('txtsubnametwo')
const nacionalidad = document.getElementById('txtnacionalidad');
var contadorNumeros = 0;

nombre.addEventListener('change', function() { 
    texto(nombre , /^[A-Za-z]{3,20}$/); 
});

apellido1.addEventListener('change', function() { 
    texto(apellido1 ,/^[A-Za-z]{3,20}$/); 
});

apellido2.addEventListener('change', function() { 
    texto(apellido2 ,/^[A-Za-z]{3,20}$/); 
});

nacionalidad.addEventListener('change', function() { 
    texto(nacionalidad, /^[A-Za-z]{3,15}$/); 
});

function texto(inputElement, regEx) {
    if (regEx.test(inputElement.value)) {
        inputElement.style.color = "green";
        contadorNumeros++;
        return true;
    } else {
        inputElement.style.color = "red";
        return false;
    }
}

//Creamos un Array de personas para guardarlas
const personas = []

function guardarUsuarios() {
    var mensaje = document.getElementById('mensaje'); // Obtén el elemento donde mostrarás el mensaje
    
    if (contadorNumeros === 4) {
        const nuevaPersona = new Persona(nombre.value, apellido1.value, apellido2.value, nacionalidad.value);
        personas.push(nuevaPersona);
        mensaje.textContent = "Guardado los datos correctamente"; // Actualiza el texto del mensaje
        mensaje.style.color = "green"; // Aplica el estilo al mensaje
        contadorNumeros = 0;
        console.log(personas);
    } else {
        mensaje.textContent = "No se han guardado los datos"; // Actualiza el texto del mensaje
        mensaje.style.color = "red"; // Aplica el estilo al mensaje
        contadorNumeros = 0;
    }
}