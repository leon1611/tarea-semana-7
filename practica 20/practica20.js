'use strict'
function multiplicar(multip,multi){
    let suma=0;
    for(let i=0;i<multip;i++){
        suma=suma+multi;
    }
 return suma;
}
let numeroUno = Number(prompt("Ingrese Primer Numero"));
let numeroDos = Number(prompt("Ingrese Segundo Numero"));
let result = multiplicar(numeroUno,numeroDos);
alert(result);
