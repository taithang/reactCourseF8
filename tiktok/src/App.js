import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  function handleIncrease() {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
