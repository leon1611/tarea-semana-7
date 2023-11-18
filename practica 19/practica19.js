'use strict'

function promediar(notaUno, notaDos, notaTres){
    let suma = notaUno + notaDos + notaTres ;
    let promedio = suma / 3;
    return promedio;
}
let parcialUno = Number(prompt("Ingrese Nota Primer Momento"));
let parcialDos = Number(prompt("Ingrese Nota Segundo Momento"));
let parcialTres = Number(prompt("Ingrese Nota Tercer Momento"));
let result = promediar(parcialUno,parcialDos,parcialTres);
alert(result);