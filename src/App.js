import React from 'react';
import './App.css';
import Counter from './features/counter/Counter'
import Todos from './features/todos/Todos'

function App() {
  return (
    <div className="main">
      <h1>React Redux proba</h1>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
