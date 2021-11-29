import React from 'react'
import AddOpcion from './components/AddOption';
import Opcions from './components/Options'
import Header from './components/Header';

function App() {
  const title = "to-do App";
  const subtitle = "Solo es una simple app para 'organizarte'";
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <div className="container">
        <div className="widget">
          <Opcions />
          <AddOpcion />
        </div>
      </div> 
    </div>
  );
}

export default App;
