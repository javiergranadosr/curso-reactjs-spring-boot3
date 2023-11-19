/*************************************
 * OBJETOS
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

console.log(invoice.total());
