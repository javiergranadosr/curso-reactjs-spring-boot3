/*************************************
 * OPERADOR SPREAD OBJETOS
 *************************************/

const invoice = {
  id: 1,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 1,
    name: "Javier",
    lastname: "Granados Rojas",
    age: 29,
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
  total: function() {
    let total = 0;
    this.items.forEach(i => {
      total += i.price  * i.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hello ${this.client.name} ${this.client.lastname}`;
  },
};

//const invoice2 = invoice; // Crea copia, pero es la misma instancia del objeto
const invoice3 = { ...invoice }; // Clona objeto, y no trabaja sobre la misma instancia del objeto
const result = invoice === invoice3;


if(result) {
  console.log(result);
}else {
  console.log("No son iguales");
}

invoice3.id = 2;
console.log(invoice.id);
console.log(invoice3.id);
