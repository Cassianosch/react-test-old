import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div data-test="component-app" className="App">
    </div>
  );
}

export default App;
