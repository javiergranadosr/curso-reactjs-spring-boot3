/*****************************************
 * PROMESAS (PROMISES)
 ****************************************/
import findByInvoiceId, { invoices, findByClientName } from "./data/invoices";

// CODIGO ASYCONTRONO

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = findByInvoiceId(100);
    if (result) {
      console.log("OK");
      resolve(result);
    } else {
      reject("Error no existe la factura por el id");
    }
  }, 2500);
});

promise
  .then((result) => {
    console.log("REALIZADA CON EXITO ALGUNA TAREA CON DEMORA");
    console.log(result);
  })
  .catch((err) => console.error(err));

// CODIGO SINCRONO, SE EJECUTA PRIMERO
//const result = findByInvoiceId(1);
//console.log(result);

// FUNCION CON PROMESA
const findInvoicesByIdExample = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = findByInvoiceId(id);
      if (result) {
        console.log("OK EN FUNCION");
        resolve(result);
      } else {
        reject("Error no existe la factura por el id en funcion");
      }
    }, 2500);
  });
};

findInvoicesByIdExample(2)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
