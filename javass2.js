//En este ejercicio, crearás un programa que le indique a las mujeres si están enedad, o no, de jubilarse.

const edad_jmujer = 60
const edad_jhombre = 65
// edad usuario
let edad = prompt ("Escriba su edad");
// sexo usuario
let sexo = prompt ("cúal es su sexo");
// transformar a numero
edad = parseInt (edad);
sexo = (sexo); 

if (sexo === "femenino" && edad < edad_jmujer){
    alert ("aun te falta para jubilar")
}
else if( sexo === "masculino" && edad < edad_jhombre){
    alert("aun te falta para jubilar")
}
else {
    alert ("ya te puedes jubilar ")
}