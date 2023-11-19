/*************************************
 * FUNCIONES
 *************************************/

// NORMALES

function sayHello(name = "", age = 0) {
  const greeting = `Hello world function ${name} ${age}!!`;
  return greeting;
}

// ANONIMA

const sayHello2 = function (name = "", age = 0) {
  const greeting = `Hello world function ${name} ${age}!!`;
  return greeting;
};

// FLECHA

const sayHello3 = (name = "", age = 0) => {
  const greeting = `Hello world function ${name} ${age}!!`;
  return greeting;
};

const sayHello4 = (name = "", age = 0) =>
  `Hello world function ${name} ${age}!!`;

const result = sayHello("Javier", 29);
const result2 = sayHello2("Monica", 30);
const result3 = sayHello3("Eduardo", 40);
const result4 = sayHello4("Luis", 50);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
