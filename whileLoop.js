/*
Explicación: La variable counter se inicializa en 10. El bucle while se ejecuta
mientras el valor de counter sea mayor que 0. En cada iteración del bucle, se 
imprime el valor de counter y luego se decrementa en 1. Cuando el valor de counter
llega a 0, el bucle se detiene y se muestra el mensaje "¡Feliz Año Nuevo!" en la consola.
*/

var counter = 10
while (counter > 0){
    console.log(counter);
    counter = counter - 1;
}
console.log('Happy New Year!')