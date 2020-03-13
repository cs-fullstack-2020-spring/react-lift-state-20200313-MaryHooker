import React from 'react';
import './App.css';
import Person from './components/Person';


function App() {
  return (
    <div className="App">
      <Person name='Mary' age='29'/>
      <Person name='Tom' age='40'/>
      
    </div>
  );
}

export default App;
