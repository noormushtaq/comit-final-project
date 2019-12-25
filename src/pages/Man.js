import React from 'react'; 

import {Link} from 'react-router-dom';

import humenbody from './humenbody.jpg'

function Man(){

    return(

        <div>
            <main>
            <h1 className="page-title">Man</h1>
            
            <p  className="paragraph-info">Welcome to the Man's Health Symptoms Diagnostic. Here you can diagnose your symptoms and identify possible health conditions by answering a series of questions. But first you have to choose the area where your symptoms appear in your body:</p>
            
            <h2 className="body-choose-q">Choose a part of the man's body</h2>
            
         <div className="humen-body">
              <div className="body-link">

                <div className="head-link">
                  <Link to="/man/manhead">Head and Neck</Link>
                </div>

                <div className="eyes-link">   
                  <Link to="/man/maneys">Eyes </Link> 
                </div>

                <div className="ears-link">
                  <Link to="/man/manears"> Ears, Nose and Throat  </Link>
                </div>

                <div className="chest-link">
                  <Link to="/man/manchest">Chest and Back </Link>
                </div>

                <div className="abdomen-link"> 
                  <Link to="/man/manabdomen"> Abdomen and Hip  </Link>
                </div>

                <div className="abdomen-link"> 
                  <Link to="/man/manarms"> Arms and Hands  </Link>
                </div>

                <div className="legs-link"> 
                  <Link to="/man/manlegs"> Legs  </Link>
                </div>

                <div className="other-link"> 
                  <Link to="/man/manother"> Other</Link>
                </div>
             </div>

             <div className="childbody-image">
             <img src={humenbody} alt=""/>
            </div> 
         </div>
         
            </main>
            
        </div>
    )
}

export default Man;