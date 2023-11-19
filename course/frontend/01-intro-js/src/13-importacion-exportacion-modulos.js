/*****************************************
 * IMPORTAR Y EXPORTAR (NOMBRADAS) MODULOS JAVASCRIPT
 ****************************************/
import findByInvoiceId, { invoices, findByClientName } from "./data/invoices";

console.log(invoices);
console.log(findByClientName("Javier"));

/*****************************************
 * IMPORTAR Y EXPORTAR (POR DEFECTO) MODULOS JAVASCRIPT
 * SOLO SE PERMITE UNA EXPORTACION POR DEFECTO, Y LA PODEMOS NOMBRAR COMO 
 * NOS GUSTE EN LA IMPORTACION
 ****************************************/

console.log(findByInvoiceId(2));
