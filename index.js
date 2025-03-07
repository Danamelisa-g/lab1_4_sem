import _ from 'lodash';
//ejercicio 1:revesa del arreglo
const numeros = [1, 2, 3, 4, 5];
_.reverse(numeros);
console.log(numeros);

//ejerccio 2:Elimina Valores Falsy
const valore= [0, "hola", false, 42, " ", null, "mundo", undefined, NaN, true];
const filtrados = _.compact(valore)
console.log(filtrados);

//ejercicio 3:Unión de Arreglos
const array1=[1,2,3];
const array2=[3,4,5];
const union=_.union(array1,array2);
console.log(union);

//parte 2
//ejercicio 4:Contar Frecuencia de Elementos
const palabras = ["hola", "mundo", "hola", "javascript", "mundo","hola"];
const frecuencia=_.countBy(palabras);
console.log(frecuencia);

//ejercicio 5:Encontrar la Diferencia
const arr1=[1,2,3,4,5];
const arr2=[3,4,5,6,7];
const diferencia=_.difference(arr1,arr2);
console.log(diferencia);

//ejercicio 6:ordenar por propiedad
const personas = [
    { nombre: "ana", edad:25},
    { nombre: "luis", edad:22},
    { nombre: "juan", edad:30},
];
const ordenar=_.sortBy(personas,"edad");
console.log(ordenar);

//ejercicio 7:obtener valores unicos
const valoresu=[1,2,2,3,4,4,5,6,6,7];
const valoresunicos=_.uniq(valoresu);
console.log(valoresunicos);

//ejercicio 8:dividir valores unicos
const n= 3;
const elementos=["a","b","c","d","e","f","g","h"];
const dividirvalores=_.chunk(elementos,n)
console.log(dividirvalores);

//ejercicio 9:transformar un objecto
const persona = {nombre: "carlos",apellidos: "perez", edad: 28};
const transformar=_.mapKeys(persona,(valor,clave)=> clave.toUpperCase());
console.log(transformar);

//ejercicio 10:aplanar arreglo profundamente
const anidados =[1,[2,[3,[4,5]]],6];
const aplanar=_.flattenDeep(anidados);
console.log(aplanar);

//ejercicio 11:Encontrar interceccion entre multiples arreglos
const lista1=[1,2,3,4,5];
const lista2=[3,4,5,6,7];
const lista3=[5,6,7,8,9];

const interceccion=_.intersection(lista1,lista2,lista3);
console.log(interceccion);

//ejercicio 12:agrupar por propiedad dinamica
const clave="curso";
const estudiantes=[
    {nombre:"mario",curso:"matematicas"},
    {nombre:"lucia",curso:"historia"},
    {nombre:"juan",curso:"matematicas"},
    {nombre:"Elena",curso:"historia"},
];
const agrupaciondinamica=_.groupBy(estudiantes,clave);
console.log(agrupaciondinamica);