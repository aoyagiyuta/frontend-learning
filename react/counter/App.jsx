import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
