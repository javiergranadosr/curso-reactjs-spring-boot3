/*************************************
 * ARREGLOS 
 *************************************/

const products = ['Mesa', 'Silla', 'Notebook', 'Teclado'];
products.push('Pantalla', 'Sony Tv');
console.log(products);

products.forEach(p => console.log(p));

for(const prod of products) {
  console.log(prod);
}

for (let index = 0; index < products.length; index++) {
  console.log(products[index]);
}