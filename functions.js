// Ejemplo 3, 2, 1 corte
let counter = 3;
function example() {
console.log(counter);
counter = counter - 1;
if (counter === 0) return;
example();
}

// Ejemplo Funcion Programacion funcional
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);