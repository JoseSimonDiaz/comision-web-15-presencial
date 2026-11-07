//ARRAY 
//EL primer indice de un array es el 0
//POrque los array y los objetos, el tipeoff me devuelve que son objetos
//porque los array y los objetos, si usas el typeoff me devuelve que son del tipo object

//Supongamos que quiera almacenar odernada mente los dias de la semana, los array en si lo usaremos para tener ordenada una informacion

const dias = [
    'lunes', 'martes',
    'miercoles', 'jueves',
    'viernes', 'sabado',
    'domingo'
]

// console.log(dias[0]);

//Metodo INCLUDE
// console.log(dias.includes('miercoles'));

//Metodo indexOf
const diasResultados = dias.indexOf('miercoles');

console.log(diasResultados);

//eliminar un elemnto del array 
//metodo POP
console.log(dias);
dias.pop()

//Metodo shift
console.log(dias);
dias.shift()
console.log(dias);

//metodo splice
// dias.splice(2,1) //borra ese elemento
// dias.splice(2,2) //borra ese elemento y de la par
dias.splice(2, 0, 'fernando') //remplaza al elemento del indice
console.log(dias);

//metodos para agregar

//PUSH - agrega un elemento nuevo al final del array
dias.push('willy')
console.log(dias);
//agregar al inicio
dias.unshift('saludos')
console.log(dias);

//ordenar - sort(ordena alfabeticamente)

dias.sort()
console.log(dias)


//MAP - metodo que usa la informacion del array, y me retorna un array nuev0



dias.map((dia) => {
    document.write(`- ${dia}- `)
})

console.log(dias);

//SORT - numerico

const numero = [1, 11, 50, 2]

console.log(numero.sort((a, b) => {
    return a - b
}));

console.log(numero.sort((a, b) => {
    return b - a
}));

dias.reverse();
console.log(dias);


//METODO SLICE - cortar una porcion

console.log(dias.slice(3,5));

//FOREACH - 
dias.forEach((dia, i) => {
    console.log(`hoy es ${dia}`);
    document.write(`hoy es ${dia} </br>`);
    console.log(i);
    
    
});

// for(let i = 0 ;i < dias.length; i++ ){
// console.log(dias[i-1]);
// document.write(`hoy es ${i-1} </br>`);
// }

//array de objetos
/*
let personas =[
{
name :'',
apellido :''
},
{
name :'',
apellido :''
},
]

repasar: 

FUNCION, 
CONDICIONALES,
BUCLES 


*/