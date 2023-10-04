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
