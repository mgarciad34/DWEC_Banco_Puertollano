function cargarDatos(){
    document.getElementById('txtname').value = persona._nombre
    document.getElementById('txtsubnameone').value = persona._apellido1
    document.getElementById('txtsubnametwo').value = persona._apellido2
    document.getElementById('txtnacionalidad').value = persona._nacionalidad
   // menu = document.getElementById('menu').innerHTML
}

function navegar(){
    var co = JSON.stringify(persona);
    localStorage.setItem("persona",persona)
    window.location.href='datos.html'
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
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


var mensaje = document.getElementById('mensaje'); // Definir mensaje globalmente

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

    console.log(persona);
}
