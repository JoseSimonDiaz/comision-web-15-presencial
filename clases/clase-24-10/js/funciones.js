//Funciones 
// miFuncion()
// funcion()

//Declarativa 
function miFuncion() {
    console.log(1 + 1);
} //se pueden sobreescribir

//aninoma
const funcion = function () {
    console.log(1 + 1);

}

// funcion() //En el caso de la anonima tiene que llamarse despues que se declare

//arrow function - nos permite colocar de una linea
//colocamos las llaves cuando es un bloque de dos linea en adelante
const funcionArrow = () => {
    return 1 + 1
};

// console.log(funcionArrow()); //invocamos la funcion usando () al final


//IIFES - funciones que se invocan solas

(() => {
    console.log("HOla mundo");

})() //Invocar, llamar, ejecutarla
//funcion - bloques de codigo a ejecutar EJ: validar formularios

//METODOS - nace desde un objeto o desde una clase 


//SCOPE = ambiente local y ambiente Global

//GLOBAL - Variable(LET,CONST,VAR), las funciones
//LOCAL - funcion dentro de {} (), es local a esa variable/condicion

// const numeroA = 1;
// const numeroB = 10;

// const suma = () =>{
//     const numeroC = 10;
//     console.log(numeroA + numeroB);
// }
// console.log(numeroC);

// suma()

//Parametro o argumento function(parametro:argumento)
/*
function sumar(1 ,1){
}
*/

const numeroA = 1;
const numeroB = 10;
const numeroC = 20;

function sumar(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

console.log(sumar(numeroA, numeroB));
// console.log(sumar(10,10));

//CALLBACK - funcion que se pasa como argumento de otra funcion
/*
functionA(){
}
function(funciontionA()){
}
*/

const suma = (numA = 0, numB = 0) => {
    console.log(numA + numB);

    return numA + numB;
}

const resultados = (funcion = null) => {
  return  funcion(10,5)
}

console.log(resultados(suma));
