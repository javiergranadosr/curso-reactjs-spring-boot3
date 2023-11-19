/*************************************
 * OPERADOR TERNARIO
 *************************************/
const average = 5.0;
const status = ( average >= 5.5 ) ? 'OK' : 'NO OK';
console.log(`Resultado: ${status}`);

if(average >= 5.5) {
  console.log(`Resultado: OK`);
}else {
  console.log(`Resultado: NO OK`);
}

let max = 0;
const a = 5;
const b = 8;
const c = 30;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`Numero mayor: ${max}`)