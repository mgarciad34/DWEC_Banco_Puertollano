class Persona {

    constructor(nombre, apellido1, apellido2, nacionalidad) {
      this._nombre = nombre;
      this._apellido1 = apellido1;
      this._apellido2 = apellido2;
      this._nacionalidad = nacionalidad;
    }
  
    // Getter para el nombre
    get nombre() {
      return this._nombre;
    }
  
    // Setter para el nombre
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    // Getter para el primer apellido
    get apellido1() {
      return this._apellido1;
    }
  
    // Setter para el primer apellido
    set apellido1(nuevoApellido1) {
      this._apellido1 = nuevoApellido1;
    }
  
    // Getter para el segundo apellido
    get apellido2() {
      return this._apellido2;
    }
  
    // Setter para el segundo apellido
    set apellido2(nuevoApellido2) {
      this._apellido2 = nuevoApellido2;
    }
  
    // Getter para la nacionalidad
    get nacionalidad() {
      return this._nacionalidad;
    }
  
    // Setter para la nacionalidad
    set nacionalidad(nuevaNacionalidad) {
      this._nacionalidad = nuevaNacionalidad;
    }
  }
  export default Persona;

