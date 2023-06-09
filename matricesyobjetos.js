/* Ejercicio: Creación de matrices y objetos

En este ejercicio de laboratorio  practicará la creación de matrices y objetos.
Tareas para completar

    Cree un nuevo literal de matriz vacío y asígnelo a la variable ropa.

    Agregue 5 de sus prendas favoritas como cadenas usando el método push().

    Retire la quinta prenda de la matriz usando el método pop().

    Agregue una nueva prenda usando el método push() .

    Use console.log para mostrar el tercer elemento de la matriz de ropa en la consola.

    Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar.

    Usando la notación de puntos, asigne una propiedad de color al objeto favCar y asígnele un valor de cadena con el color de su elección.

    Usando la notación de puntos, asigne una propiedad convertible al objeto y favCar y asígnele un valor booleano de su elección.

    Utilice la consola para registrar todo el objeto favCar.*/

// Creación de matriz y manipulación
const ropa = [];

ropa.push('camiseta');
ropa.push('pantalón');
ropa.push('chaqueta');
ropa.push('vestido');
ropa.push('zapatos');

ropa.pop();

ropa.push('bufanda');

console.log(ropa[2]); // Output: 'chaqueta'

// Creación de objeto y asignación de propiedades
const favCar = {};

favCar.color = 'rojo';
favCar.convertible = true;

console.log(favCar);
