function cargarDatos(){
    document.getElementById('txtname').value = persona._nombre
    document.getElementById('txtsubnameone').value = persona._apellido1
    document.getElementById('txtsubnametwo').value = persona._apellido2
    document.getElementById('txtnacionalidad').value = persona._nacionalidad
   // menu = document.getElementById('menu').innerHTML
}

function navegar(){
    var contenido = JSON.stringify(persona);
    localStorage.setItem("persona",contenido)
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
        banco.numCuenta = iban.value;
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
        banco.numCuenta = iban.value;
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
    texto(nombre , /^[A-Za-zñ]{3,20}$/); 
});

apellido1.addEventListener('change', function() { 
    texto(apellido1 ,/^[A-Za-zñ]{3,20}$/); 
});

apellido2.addEventListener('change', function() { 
    texto(apellido2 ,/^[A-Za-zñ]{3,20}$/); 
});

nacionalidad.addEventListener('change', function() { 
    texto(nacionalidad, /^[A-Za-zñ]{3,15}$/); 
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

const persona = new Persona('Manuel', 'Garcia', 'Diaz', 'Español')    


function guardarUsuarios() {
    console.log(contadorNumeros);

    if (contadorNumeros === 4) {
        // Obtén los valores de los campos de formulario
        var nuevoNombre = document.getElementById('txtname').value;
        var nuevoApellido1 = document.getElementById('txtsubnameone').value;
        var nuevoApellido2 = document.getElementById('txtsubnametwo').value;
        var nuevaNacionalidad = document.getElementById('txtnacionalidad').value;

        // Actualiza el objeto persona1 con los nuevos valores
        persona._nombre = nuevoNombre;
        persona._apellido1 = nuevoApellido1;
        persona._apellido2 = nuevoApellido2;
        persona._nacionalidad = nuevaNacionalidad;

        mensaje.textContent = "Guardado los datos correctamente"; // Actualiza el texto del mensaje
        mensaje.style.color = "green"; // Aplica el estilo al mensaje
        contadorNumeros = 0;
    } else {
        mensaje.textContent = "Datos no guardados"; // Actualiza el texto del mensaje
        mensaje.style.color = "red"; // Aplica el estilo al mensaje
        contadorNumeros = 0;
    }
}