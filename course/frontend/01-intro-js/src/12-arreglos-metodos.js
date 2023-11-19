/*****************************************
 * ARREGLOS, OPERADORES
 ****************************************/
const invoices = [
  {
    id: 1,
    name: "Compras de oficina",
    client: {
      name: "Javier",
      lastname: "Granados Rojas",
    },
    items: [
      {
        product: "Keyboard",
        price: 499,
        quantity: 2,
      },
      {
        product: "Mouse",
        price: 200,
        quantity: 1,
      },
      {
        product: "Paper",
        price: 10,
        quantity: 20,
      },
    ],
  },
  {
    id: 2,
    name: "Compras de computadoras",
    client: {
      name: "Javier",
      lastname: "Granados Rojas",
    },
    items: [
      {
        product: "Keyboard",
        price: 499,
        quantity: 2,
      },
      {
        product: "Monitor",
        price: 200,
        quantity: 1,
      },
      {
        product: "Paper",
        price: 10,
        quantity: 20,
      },
    ],
  },
  {
    id: 3,
    name: "Compras de papeleria",
    client: {
      name: "Javier",
      lastname: "Granados Rojas",
    },
    items: [
      {
        product: "Keyboard",
        price: 499,
        quantity: 2,
      },
      {
        product: "Mouse",
        price: 200,
        quantity: 1,
      },
      {
        product: "Paper",
        price: 10,
        quantity: 20,
      },
    ],
  },
];

// MAP - METODO DECLARATIVO, NO MODIFICA EL ARRAY ORIGINAL
const invoicesClone = invoices.map( i => {
  return i.name
});

const invoicesClients = invoices.map( i => {
  return i.client.name;
});

console.log(invoicesClone);
console.log(invoicesClients);


// FIND
const invoicesFind = invoices.find(i => i.id === 3);
console.log(invoicesFind);

// FILTER
const invoicesFilter = invoices.filter(i => i.id >= 2 );
const invoicesFilterDeleted = invoices.filter(i => i.id !== 2);
console.log(invoicesFilterDeleted);
console.log(invoicesFilter);

// SOME - DEVUELVE, TRUE O FALSE
const result = invoices.some(i => i.id === 3);
console.log(result);



// REDUCE 

/*const resultado = lista.reduce(function callback(valorAnterior, valorActual) {
  return; // resultado de la función callback 
}, valorInicial);*/

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10


