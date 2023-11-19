/*****************************************
 * CONSUMIR API REST CON FETCH API
 ****************************************/
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

/*httpClient.then((response) => {
    console.log(response);
    response.json().then(data => {
        console.log(data);
    });
});*/

httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));
