import React from 'react';
import './App.css';
import CurrentValue from './components/CurrentValue';
import GraphicMonth from './components/GraphicMonth';

function App() {
  return (
    <div className="App">
      <nav>
        <p>
          Valor Bitcoin
        </p>
      </nav>
      <CurrentValue />
      <GraphicMonth />
    </div>
  );
}

export default App;
