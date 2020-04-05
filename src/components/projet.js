import React from 'react';
import {MyContext} from "../App.js"
import './projet.scss';

function currentSection(){

  console.log()

}

function Projet() {
  return (
    <MyContext.Consumer>
    {({val, set})=> (
    <div className="projet">
      <div>{val}</div>
     <div className="projet__picture">
         <img  className="projet__picture_img" src="http://timotheeserck.be/imgs/image1.png" alt=""/>
     </div>
     <div className="projet__description">
        <h2 className="projet__description_title">Titre</h2> 
        <div  className="projet__description_tags"><span>tag</span></div>    
        <p  className="projet__description_txt">txt</p>
     </div>
    </div>
          )}
          </MyContext.Consumer>
  );
}

export default Projet;