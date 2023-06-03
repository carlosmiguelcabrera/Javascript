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

//Ejercicio 1: Crear una clase "Rectángulo" y calcular su área y perímetro.

class Rectangulo {
  constructor(ancho, altura) {
    this.ancho = ancho;
    this.altura = altura;
  }

  calcularArea() {
    return this.ancho * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.altura);
  }
}

// Crear una instancia de Rectangulo
const rectangulo = new Rectangulo(5, 3);

// Calcular y mostrar el área y perímetro del rectángulo
console.log("Área del rectángulo:", rectangulo.calcularArea());
console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());

//Ejercicio 2: Crear una clase "CuentaBancaria" con métodos para depositar, retirar y obtener el saldo.

class CuentaBancaria {
  constructor() {
    this.saldo = 0;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
    console.log("Se depositaron", cantidad, "en la cuenta.");
  }

  retirar(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log("Se retiraron", cantidad, "de la cuenta.");
    } else {
      console.log("Saldo insuficiente para realizar la operación.");
    }
  }

  obtenerSaldo() {
    return this.saldo;
  }
}

// Crear una instancia de CuentaBancaria
const cuenta = new CuentaBancaria();

// Realizar operaciones de depósito y retiro
cuenta.depositar(1000);
cuenta.retirar(500);
cuenta.retirar(800); // Intentar retirar una cantidad mayor al saldo actual

// Obtener y mostrar el saldo actual
console.log("Saldo actual:", cuenta.obtenerSaldo());

/* El código crea un objeto "car" con propiedades como "mileage" (kilometraje) y "color". También define métodos como "turnTheKey"
(encender el motor) y "lightsOn" (encender las luces). Luego, muestra el objeto "car" actualizado en la consola y llama a los métodos
para imprimir mensajes indicando que el motor está en marcha y las luces están encendidas. En resumen, el código representa la 
simulación de un automóvil con sus propiedades y acciones básicas.*/

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()


¡Por supuesto! Aquí tienes un ejemplo de ejercicio de programación orientada a objetos en JavaScript sobre trenes y su velocidad:

javascript
Copy code
// Definición de la clase Tren
class Tren {
  constructor(nombre) {
    this.nombre = nombre;
    this.velocidad = 0;
  }

  acelerar(velocidad) {
    this.velocidad += velocidad;
    console.log(`El tren ${this.nombre} aceleró a ${this.velocidad} km/h.`);
  }

  frenar() {
    this.velocidad = 0;
    console.log(`El tren ${this.nombre} se detuvo.`);
  }
}

// Creación de objetos Tren
const tren1 = new Tren("Tren A");
const tren2 = new Tren("Tren B");

// Operaciones en los trenes
tren1.acelerar(50);
tren2.acelerar(80);
tren1.frenar();
tren2.frenar();

/*En este ejemplo, creamos la clase Tren con un constructor que inicializa el nombre del tren y su velocidad en 0. Luego, tenemos dos métodos: acelerar que incrementa la velocidad del tren y muestra un mensaje en la consola, y frenar que detiene el tren y muestra un mensaje en la consola.
Después de definir la clase, creamos dos objetos tren1 y tren2 utilizando el constructor de la clase Tren. Luego, llamamos a los métodos acelerar y frenar en cada uno de los objetos para simular acciones en los trenes.
¡Puedes ejecutar este código en un entorno de JavaScript para ver los mensajes de salida en la consola y experimentar con diferentes valores de velocidad y acciones en los trenes!*/

// Definición de la clase Tren
class Tren {
  constructor(nombre) {
    this.nombre = nombre;
    this.velocidad = 0;
  }

  acelerar(velocidad) {
    this.velocidad += velocidad;
    console.log(`El tren ${this.nombre} aceleró a ${this.velocidad} km/h.`);
  }

  frenar() {
    this.velocidad = 0;
    console.log(`El tren ${this.nombre} se detuvo.`);
  }
}

// Creación de objetos Tren
const tren1 = new Tren("Tren A");
const tren2 = new Tren("Tren B");

// Operaciones en los trenes
tren1.acelerar(50);
tren2.acelerar(80);
tren1.frenar();
tren2.frenar();
