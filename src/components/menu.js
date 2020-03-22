import React from 'react';
import './menu.scss';

const { useState } = React;


function Menu() {
  const [currentProject, setCurrentProject] = useState("tfe");

  function selectProject(e) {
    e.preventDefault();
    let value = e.target.href.substring(e.target.href.lastIndexOf('/') + 1);
    console.log(e.target.href.substring(e.target.href.lastIndexOf('/') + 1));
    setCurrentProject(value);
    //parentCallback(currentProject);
  }

  return (
    <div className="menu">
      <menu className="nav">
        <ul>
          <li className="nav__li"><a onMouseOver={selectProject} className="nav__li--a" href="tfe">Little voice</a></li>
          <li className="nav__li"><a onMouseOver={selectProject} className="nav__li--a" href="libia">Libia velo</a></li>
          <li className="nav__li"><a onMouseOver={selectProject} className="nav__li--a" href="lab">Old website</a></li>
          <li className="nav__li"><a onMouseOver={selectProject} className="nav__li--a" href="zeldman">Zeldman</a></li>
          <li className="nav__li"><a onMouseOver={selectProject} className="nav__li--a" href="atelierDesign">Guidlines</a></li>
        </ul>
        </menu>
    </div>
  );
}

export default Menu;