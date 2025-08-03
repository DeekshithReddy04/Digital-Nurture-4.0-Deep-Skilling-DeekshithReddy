import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };
  const sayHello = () => {
    console.log("Hello! Keep clicking!");
    alert("Hello! Keep clicking!");
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const sayWelcome = (message) => {
    alert(`You said: ${message}`);
  };
  const handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };
  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      <hr />
      <button onClick={handleSyntheticEvent}>Synthetic Event (onClick)</button>
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
