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

// Definición de una clase 'Animal'
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  comer() {
    console.log(`${this.nombre} está comiendo.`);
  }
}

// Definición de una subclase 'Perro' que hereda de 'Animal'
class Perro extends Animal {
  ladrar() {
    console.log(`${this.nombre} está ladrando.`);
  }
}

// Creación de objetos utilizando las clases 'Animal' y 'Perro'
const animal1 = new Animal('Animal');
const perro1 = new Perro('Firulais');

// Llamada a los métodos de los objetos
animal1.comer(); // Imprime: Animal está comiendo.
perro1.comer();  // Imprime: Firulais está comiendo.
perro1.ladrar(); // Imprime: Firulais está ladrando.
