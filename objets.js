// Definición de una clase 'Persona'
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creación de objetos utilizando la clase 'Persona'
const persona1 = new Persona('Juan', 25);
const persona2 = new Persona('María', 30);

// Llamada al método 'saludar()' de los objetos
persona1.saludar(); // Imprime: Hola, mi nombre es Juan y tengo 25 años.
persona2.saludar(); // Imprime: Hola, mi nombre es María y tengo 30 años.
