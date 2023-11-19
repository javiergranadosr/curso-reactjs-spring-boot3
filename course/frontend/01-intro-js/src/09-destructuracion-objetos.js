/*************************************
 * DESTRUCTURACION DE OBJETOS
 *************************************/

const user = {
  username: 'Javier',
  email: 'javier@gmail.com',
  age: 29,
  ranking:10 
};

const {username, ranking} = user;
console.log(username, ranking);
