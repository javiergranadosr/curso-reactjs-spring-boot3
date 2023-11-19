/*****************************************
 * DESTRUCTURACION DE ARREGLOS
 ****************************************/

const users = ['pepe', 'ana', 'maria', 'juan', 'carlos'];
const [pepe, ana, maria, ...rest] = users;
console.log(pepe);
console.log(rest)