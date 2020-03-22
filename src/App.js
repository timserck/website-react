import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Menu from './components/menu.js';
import Projet from './components/projet.js';

  function callback(currentProject) {
    console.log(currentProject, 'currentProject')
    // do something with value in parent component, like save to state
  }

function App() {

  function callback(currentProject) {
    console.log(currentProject, 'currentProject')
    // do something with value in parent component, like save to state
  }
  
  return (
    <div className="App">
         <Menu parentCallback={callback}/> 
         <Projet/>
    </div>
  );
}

export default App;

