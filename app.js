
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

function guardarUsuarios(nombre, apellido1, apellido2, nacionalidad) {
    var mensaje = "";
    if(contadorNumeros == 4){
        const nuevaPersona = new Persona(nombre, apellido1, apellido2, nacionalidad)
        personas.push(nuevaPersona)
        mensaje = "Guardado los datos correctamente"
        mensaje.style.color = "green";

    }else{
        mensaje = "No se han guardado los datos"
        mensaje.style.color = "red";
    }

}