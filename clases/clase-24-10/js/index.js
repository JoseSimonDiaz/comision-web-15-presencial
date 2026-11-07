//variable puede mutar, let(porque va a cambiar)
//Cuando sabemos que el valor de la variable no va a mutar usamos const

/*
parseInt - transforma numeros enteros
pasefloat - para string decimales y para enteros
Number - tanto como para numero entero como decimales 
*/

// const numero1 =  prompt("Ingresa un numero");

// const numero2 =  prompt("Ingresa otro numero");

// console.log(Number(numero1) + Number(numero2));
// console.log(numero1 / numero2);
// console.log(numero1 * numero2);
// console.log(numero1 - numero2);

// const nombre = prompt("Ingresa tu nombre");
// const apellido = prompt("Ingresa tu apellido"); //string
// const edad = 18; //number
//String - comienza desde el 0(primera posicion) en adelante
// SI no encuentre devuelve -1
// console.log(`HOlaa Mi nombre es ${nombre} y mi apellido ${apellido} y mi edad es ${edad}`);
// console.log(nombre.charAt(0));
// console.log(apellido.substring(1,3)) //indico la posicion y corta desde donde yo le indico
// console.log(apellido.length); 
// console.log(nombre.split("A")); 


//TIPO DE DATO NUMBER
// const precio = 18.423232323242; //Numero puro

//MATH 

// //Ceil - toma el numero entero
// console.log(Math.ceil(precio));

// //Floor - redondear para arriba
// console.log(Math.floor(precio));

// //Roud - depende del siguiente
// // console.log();
// console.log(Math.round(precio));

// //random - numero aleatorio, devuelve un numero del 0 al 1
// console.log(Math.round(Math.random()* 10));


let numero1 = 12;
let numero2 ="12";
//igual =
console.log(numero1 == numero2);//valor
console.log(numero1 === numero2);//tipo de dato
//distinto !=

//validaciones
//and(y) && - 

//OR(o) || -

//NOT ! - invertir el valor
let ternimo = true
console.log(!ternimo);


//ARRAY - cuando necesito que la informacion se ordene en un bloque, se guarda cualquier tipo de dato, tener todos los elementos ordenados, elementos

let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

console.log(dias);
console.log(dias[6], dias[2]); //obtenengo un dato del array



//OBJETO - propiedades
const persona ={
    nombre : "Jose",
    apellido :"Diaz",
    edad : 20
}
 console.log(persona);
 console.log(persona.nombre); //obtenre un dato del objeto
 
