import React from 'react';
import {MyContext} from "../App.js"
import './projet.scss';

function currentSection(val){

    console.log(val)
    Projects.forEach((project) => {

        if (val == project.title) {
            console.log(project);
            return project;
        }
    })

}




const Projects = [
    {
    'title': 'tfe',
    'tag': ['at', 'dez', 'azer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image1.png'
    },
    {
        'title': 'libia',
        'tag': ['at', 'dez', 'azeeeer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image1.png'

    },
    {
        'title': 'lab',
        'tag': ['eeat', 'dez', 'azer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image1.png'

    },
    {
        'title': 'zeldman',
        'tag': ['at', 'dez', 'azer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image1.png'

    },
    {
        'title': 'atelierDesign',
        'tag': ['at', 'dez', 'azezrter'],
        'description': 'desciption tytyuytyczerzetrycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image1.png'

    }
]

function Projet() {
    return (
        <MyContext.Consumer>
            
            {({ val, set }) => (
               
                


                    {
                        Projects.map((item, i) => {

                            if (item.title === val) {


                                return (
                                    <div className={`projet  is--${val} `}>  

                                        <div className="projet__picture">
                                            <img className="projet__picture_img" src="{item.image}" alt="" />
                                        </div>
                                        <div className="projet__description">
                                            <h2 className="projet__description_title">${item.title}</h2>
                                            <div className="projet__description_tags"><span>${item.tag[0]}</span></div>
                                            <p className="projet__description_txt">${item.description}</p>
                                        </div>
                                        
                                    </div>
                                )

                            }
                           

                             
                        })
                    }

                
          )}
          </MyContext.Consumer>
  );
}

export default Projet;