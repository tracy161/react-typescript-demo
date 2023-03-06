import React from 'react';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name='Tracy' messageCount={20} isLoggedIn={false}/>
    </div>
  );
}

export default App;
