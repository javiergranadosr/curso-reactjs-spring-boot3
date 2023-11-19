/*****************************************
 * DESTRUCTURACION DE OBJETOS EN FUNCIONES
 ****************************************/

const user = {
  username: 'Javier',
  email: 'javier@gmail.com',
  age: 29,
  ranking:10 
};


const detail = ({username, email}) => {
  console.log(`Detalle  del usuario ${username} con email ${email}`);
};

detail(user);
