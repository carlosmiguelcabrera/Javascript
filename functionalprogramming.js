// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason === "birthday") {
    console.log("%cHappy birthday", fontStyle);
  } else if (reason === "champions") {
    console.log("%cCongrats on the title!", fontStyle);
  } else {
    console.log("Celebrating for:", reason);
  }
}


// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


// Call styleAndCelebrate

// Ejemplo de programación funcional: filtrar números pares

// Lista de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función para comprobar si un número es par
const isEven = (number) => number % 2 === 0;

// Utilizando programación funcional para filtrar los números pares
const evenNumbers = numbers.filter(isEven);

// Imprimir el resultado
console.log(evenNumbers);

const add = (x) => x + 1;
const multiply = (x, y) => x * y;

const composedFunction = (x, y) => multiply(add(x), y);

console.log(composedFunction(2, 3)); // 9



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // 15

# Cálculo del factorial de un número de forma recursiva
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

result = factorial(5)  # 120

# Función de orden superior que toma una función y una lista, y aplica la función a cada elemento de la lista
def apply_function_to_list(func, lst):
    return [func(x) for x in lst]

# Función que suma 1 a un número
def increment(x):
    return x + 1

numbers = [1, 2, 3, 4, 5]
result = apply_function_to_list(increment, numbers)  # [2, 3, 4, 5, 6]

// Definir una función para calcular el factorial de un número
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Pedir al usuario que ingrese un número
var num = parseInt(prompt("Ingrese un número:"));

// Calcular el factorial del número ingresado
var resultado = factorial(num);

// Mostrar el resultado
console.log("El factorial de " + num + " es: " + resultado);

