// Funcion basica que al llamarla muestra Hola mundo
function holaMundo() {
  console.log("Hello World");
}
//Crea una función timesFive que acepte un argumento, lo multiplique por 5y devuelva el nuevo valor.
/function timesFive(para1){
  return para1 * 5;
}
// Funion basica usando Argumentos
function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}
functionWithArgs(5,7); //llamando a la funcion con parametros en este caso Devuelve 12

// Ejemplo 3, 2, 1 corte
let counter = 3;
function example() {
console.log(counter);
counter = counter - 1;
if (counter === 0) return;
example();
}
/* Cuando escribimos un código FP, mantenemos los datos y la funcionalidad
por separado y pasamos los datos a las funciones solo cuando queremos que 
algo se calcule.
En la programación funcional, las funciones devuelven nuevos valores y luego
usan esos valores en otra parte del código.
*/


function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!


// otro ejemplo Funcion Programacion funcional

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
