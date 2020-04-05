import React from 'react';
import './menu.scss';
import {MyContext} from "../App.js"


function Menu(props) {


  function selectProject(e, set) {
    e.preventDefault();
    let value = e.target.href.substring(e.target.href.lastIndexOf('/') + 1);
    // console.log(e.target.href.substring(e.target.href.lastIndexOf('/') + 1));
    set(value);
    
    //parentCallback(currentProject);
  }

//  function getValue(e){
//    let value = e.target.href.substring(e.target.href.lastIndexOf('/') + 1);
//    props.callback(value)
//  }


  return (
    // <a href="value">
    //   Lien
    // </a>
    <MyContext.Consumer>
     {({val, set})=> (
      <div className="menu"> 
        <menu className="nav">
          <ul>
            <li className="nav__li"><a onMouseOver={(e) => selectProject(e, set)} className="nav__li--a" href="tfe">Little voice</a></li>
            <li className="nav__li"><a onMouseOver={(e) => selectProject(e, set)} className="nav__li--a" href="libia">Libia velo</a></li>
            <li className="nav__li"><a onMouseOver={(e) => selectProject(e, set)} className="nav__li--a" href="lab">Old website</a></li>
            <li className="nav__li"><a onMouseOver={(e) => selectProject(e, set)}className="nav__li--a" href="zeldman">Zeldman</a></li>
            <li className="nav__li"><a onMouseOver={(e) => selectProject(e, set)} className="nav__li--a" href="atelierDesign">Guidlines</a></li>
          </ul>
        </menu> 
      </div>
      )}

   
    </MyContext.Consumer>
  );
}

export default Menu;