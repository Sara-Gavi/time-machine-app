import { useState } from "react";

function Counter() {
  // Estado inicial para el contador y para el mensaje sobre los límites del tiempo.
  const [count, setCount] = useState(0);
  const [timeMessage, setTimeMessage] = useState("");

  // Funciones para manejar el estado del contador

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      setTimeMessage(""); // Limpia el mensaje
    } else {
      setTimeMessage("¡Has llegado al límite del futuro!");
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setTimeMessage(""); // Limpia el mensaje
    } else {
      setTimeMessage("¡No puedes viajar más atrás en el tiempo!");
    }
  };

  const handleReset = () => {
    setCount(0);
    setTimeMessage("De vuelta al presente");
  };

  return (
    <div className="counter__container">
      <h1 className="counter__title">Contador del Tiempo</h1>
      <h2 className="counter__number">{count}</h2>
      <p className="counter__message">{timeMessage}</p>
      <div className="counter__buttons">
        <button className="counter__button" onClick={handleIncrement}>
          Avanzar
        </button>
        <button className="counter__button" onClick={handleDecrement}>
          Retroceder
        </button>
        <button
          className="counter__button counter__button__reset"
          onClick={handleReset}
        >
          Volver al presente
        </button>
      </div>
    </div>
  );
}

export default Counter;
