import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Menu from './components/menu.js';
import Projet from './components/projet.js';
import Logo from './components/logo.js';
const { useState } = React;
const  selectProject = {'project' : 'tfe'}
export const MyContext = React.createContext(selectProject);




function App() {

  // function childHandler(dataFromChild) {
  //   console.log(dataFromChild);

  // }


   
  const [displayProject, setDisplayProject] = useState(false);
  const [currentProject, setCurrentProject] = useState("tfe");

  return (
      <MyContext.Provider value={{ val: currentProject, set: setCurrentProject, show: displayProject, setShow: setDisplayProject } } >
      <div className="App">
          <Logo />
          <Menu />
          <Projet/>
      </div>
    </MyContext.Provider>
  );
}

export default App;

