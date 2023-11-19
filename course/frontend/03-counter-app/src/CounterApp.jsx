import { useState } from "react";

export const CounterApp = ({value}) => {
 
  /**
   * HOOK USE STATE,
   * 1 PARAMETRO [counter], INDICA LA VARIABLE DE NUESTRA DATA, LA ALMACENA
   * 2 PARAMETRO [setCounter], INDICA ACTUALIZA LA INFORMACION DE NUESTRA VARIABLE DATA, ACTUALIZA EL ESTADO.
   * 3 PARAMETRO [0] VALOR INICIAL
   */  
  const [counter, setCounter ] = useState(value);   

  const conuterIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>Valor del contador es {counter}</h2>
      <button onClick={conuterIncrement}>Incrementar contador +1</button>
    </>
  );
};
