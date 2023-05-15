/*Explicación: El bucle "for" exterior se inicia con year igual a 2023. 
La condición year < 2025 especifica que el bucle se ejecutará mientras 
year sea menor que 2025. En cada iteración del bucle, se imprime el 
valor de year. Luego, hay un bucle "for" interno que se encarga de 
imprimir los meses desde junio (valor inicial de month igual a 6)
hasta agosto. La condición month < 9 asegura que el bucle interno
se ejecutará mientras month sea menor que 9. En cada iteración del
bucle interno, se imprime "..........." seguido del valor de month.
Una vez que el bucle interno finaliza, el bucle externo continúa con
la siguiente iteración, aumentando el valor de year en 1. Esto se 
repite hasta que year alcanza el valor de 2025.*/

for(var year = 2023; year < 2025; year++) {
    console.log(year);
    for(month = 6; month < 9; month++){
        console.log("...........", month);
    }
}