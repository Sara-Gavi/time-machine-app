import { useState } from "react";

function Counter() {
  // Estado inicial para el contador
  const [count, setCount] = useState(0);

  // Funciones para manejar el estado del contador

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  const handleReset = () => setCount(0);

  return (
    <div className="counter__container">
      <h1>Contador del Tiempo</h1>
      <h2 className="counter__number">{count}</h2>
      <div className="counter__buttons">
        <button className="counter__button" onClick={handleIncrement}>
          Avanzar
        </button>
        <button className="counter__button" onClick={handleDecrement}>
          Retroceder
        </button>
        <button className="counter__button" onClick={handleReset}>
          Volver al presente
        </button>
      </div>
    </div>
  );
}

export default Counter;
