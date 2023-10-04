

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

function comprobarTarjeta() {
    const expresionRegular = /^[0-9]{16}$/;
    return expresionRegular.test(tarjeta.value);
}

