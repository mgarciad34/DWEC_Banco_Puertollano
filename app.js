function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function navegar(){
    var conversionBanco = JSON.stringify(banco);
    localStorage.setItem("banco", conversionBanco)
}

var banc = localStorage.getItem("banco")
var co = JSON.parse(banc)

class Banco{
    constructor(numCuenta, saldoTotal){
        this.numCuenta = numCuenta;
        this.saldoTotal = saldoTotal;
    }
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
var cantidadRetirar = document.getElementById("txtretirar");
var cantidadIngresar = document.getElementById("txtingresar");
const mensaje = document.getElementById("mensaje");

var banco = new Banco(iban, saldoFijo)

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
        banco.saldoTotal = saldoFijo.value;
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
    // Elimina la siguiente línea, ya que 'mensaje' ya se ha declarado al principio
    // const mensaje = document.getElementById("mensaje");

    if (isNaN(cantidadIngreso) || cantidadIngreso <= 0) {
        mensaje.innerText = "Cantidad no válida.";
        mensaje.style.color = "red";
    } else {
        const nuevoSaldo = saldo + cantidadIngreso;
        saldoFijo.value = nuevoSaldo.toFixed(2);
        banco.saldoTotal = saldoFijo.value;
        mensaje.innerText = `Ingresado: ${cantidadIngreso.toFixed(2)} euros. Nuevo saldo: ${nuevoSaldo.toFixed(2)} euros.`;
        mensaje.style.color = "green";
        cantidadIngresar.value = "";
    }

    if (cantidadIngresar.value === "" && cantidadRetirar.value !== "") {
        cantidadRetirar.value = "";
    }
}


cantidadRetirar.addEventListener("focus", function() {
      cantidadIngresar.value = "";
  });
  
  cantidadIngresar.addEventListener("focus", function() {
      cantidadRetirar.value = "";
  });

