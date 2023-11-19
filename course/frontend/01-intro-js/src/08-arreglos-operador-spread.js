/*************************************
 * ARREGLOS Y OPERADOR SPREAD
 *************************************/

let products = ['Mesa', 'Silla', 'Notebook', 'Teclado'];
const fruits = ['Peras', 'Manzanas', 'Sandias'];

const productsAndFruits = [...fruits,  ...products, 'Lechuga', 'Papas', 'Uvas'];
const other = products.concat('other');


console.log(productsAndFruits);
console.log(other);
