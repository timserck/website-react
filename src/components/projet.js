import React from 'react';

import './projet.scss';

function Projet() {
  return (
    <div className="projet">
     <div className="projet__picture">
         <img  className="projet__picture_img" src="http://timotheeserck.be/imgs/image1.png" alt=""/>
     </div>
     <div className="projet__description">
        <h2 className="projet__description_title">Titre</h2> 
        <div  className="projet__description_tags"><span>tag</span></div>    
        <p  className="projet__description_txt">txt</p>
     </div>
    </div>
  );
}

export default Projet;