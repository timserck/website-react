import React from 'react';
import {MyContext} from "../App.js"
import './projet.scss';

function backProject(show, setShow) {
    setShow(false);
}




const Projects = [
    {
    'title': 'tfe',
        'tags': ['nodeJs', 'graduate',],
        'description': `This game is my Graduation project. A game where two people with differents abilities have to find the exit together.
				With this approche i would sensiblisate the user to the accessibilite of the web.`,
        'image': 'http://timotheeserck.be/imgs/image1.png',
        'btn': 'how far did you go ?',
        'link':'https://serck.ddns.net/timoth%C3%A9e/tfe/dist/'

    },
    {
        'title': 'libia',
        'tags': ['at', 'dez', 'azeeeer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image2.png',
        'btn': 'how far did you go ?',
        'link': 'https://serck.ddns.net/timoth%C3%A9e/tfe/dist/'

    },
    {
        'title': 'lab',
        'tags': ['eeat', 'dez', 'azer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image3.png',
        'btn': 'how far did you go ?',
        'link': 'https://serck.ddns.net/timoth%C3%A9e/tfe/dist/'

    },
    {
        'title': 'zeldman',
        'tags': ['at', 'dez', 'azer'],
        'description': 'desciption tytyuytycycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image4.png',
        'btn': 'how far did you go ?',
        'link': 'https://serck.ddns.net/timoth%C3%A9e/tfe/dist/'

    },
    {
        'title': 'atelierDesign',
        'tags': ['at', 'dez', 'azezrter'],
        'description': 'desciption tytyuytyczerzetrycyv  yvy yy',
        'image': 'http://timotheeserck.be/imgs/image5.png',
        'btn': 'how far did you go ?',
        'link': 'https://serck.ddns.net/timoth%C3%A9e/tfe/dist/'

    }
]

function Projet() {
    return (
        <MyContext.Consumer>


            {({ val, set, show, setShow }) => (

                Projects.map((item, i) => {
                    //console.log(item, val)
                    if (item.title == val) {
                        

                        return (

                            <div key={i} className={`projet  is--${val} ${show === false ? '' : 'is--active'}`}>

                                <div className="projet__picture">
                                    <img className="projet__picture_img" src={item.image} alt="" />
                                    <button onClick={(e) => { backProject(show, setShow) }} className={`${show === false ? '' : 'is--active'} projet__back`}>

                                        <span className="projet__back_txt">BACK</span>

                                    </button>

                                </div>
                                <div className="projet__description">
                                    <a href={item.link} className="project__description_link">
                                        <h2 className="projet__description_title">{item.title}</h2>
                                        <div className="projet__description_tags">
                                            {
                                                item.tags.map((tag, i) => {
                                                    //console.log(item, i);
                                                    return (
                                                        <span className="projet__description_tags--tag" key={i}>#{tag}</span>
                                                        )
                                                    
                                                })
                                            }
                                        </div>
                                        <p className="projet__description_txt">{item.description}</p>
                                        < button className="projet__description_btn"></button>

                                    </a>
                                </div>

                            </div>
                            
                         
                            
                            )
                    }
                })

           )}
        </MyContext.Consumer>
  );
}

export default Projet;