import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('');

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    setStatus('Incremented');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    setStatus('Decremented');
  };

  const handleCheckEvenOdd = () => {
    if (count % 2 === 0) {
      setStatus('Even number');
    } else {
      setStatus('Odd number');
    }
  };

  const handleReset = () => {
    setCount(0);
    setStatus('Reset');
  };

  return (
    <div className="App">
      <h1>React Coverage Test</h1>
      <h2>Count: {count}</h2>
      <h3>Status: {status}</h3>

      <button onClick={handleIncrement}>➕ Increment</button>
      <button onClick={handleDecrement}>➖ Decrement</button>
      <button onClick={handleCheckEvenOdd}>🔍 Even/Odd</button>
      <button onClick={handleReset}>🔄 Reset</button>

      {count > 10 && <p>Count is over 10 🎉</p>}
      {count < -5 && <p>Count is very low 😬</p>}
    </div>
  );
}

export default App;
