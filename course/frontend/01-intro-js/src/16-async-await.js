/*****************************************
 * USO DE ASYNC Y AWAIT
 ****************************************/

/*httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));*/

/**
 * EL AWAIT RESUELVE LAS PROMESAS, EMITE EL RESOLVE (EJECUTA EL .THEN DE LA PROMESA),
 * SOLO SE PERMITE SU USO EN FUNCIONES
 * @returns
 */

/*const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};*/

//const users = await findAllUsers();
//console.log(users);

const showUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const ul = document.createElement("ul");

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.append(li);
  });

  document.getElementById("root").append(ul);
};

showUsers();
