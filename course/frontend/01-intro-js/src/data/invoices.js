export const invoices = [
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

export const findByClientName = (clientName) => {
  return invoices.find((i) => i.client.name === clientName);
};

// IMPORTACION POR DEFECTO
export default (invoiceId) => {
  return invoices.find((i) => i.id === invoiceId);
};

// OTRA FORMA DE EXPORTAR ELIMINANDO LOS EXPORT DE LAS VARIABLES Y FUNCIONES.
/*export {
    invoices,
    findByClientName,
    findByInvoiceId as default
}*/
