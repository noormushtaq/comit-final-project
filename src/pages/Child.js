import React from 'react'; 
import {Link}from 'react-router-dom';

import childbody from './childbody.jpg';



function Child(){

    return(

        <div>
            <main>
            <h1 className="page-title">Child</h1>
            <p className="paragraph-info">Welcome to Online Doctor Health Symptoms Diagnostic. Here you can Diagnose your child's Symptoms and identify possible health condition by answering a series of quesstions. But first, choose the area where your child's symptoms appear:  </p>
            
            <h2 className="body-choose-q">Choose a part of the child's body</h2>
            
         <div className="humen-body">
              <div className="body-link">

                <div className="head-link">
                  <Link to="/child/head">Head and Neck</Link>
                </div>

                <div className="eyes-link">   
                  <Link to="/child/eyes">Eyes </Link> 
                </div>

                <div className="ears-link">
                  <Link to="/child/ears"> Ears, Nose and Throat  </Link>
                </div>

                <div className="chest-link">
                  <Link to="/child/chest">Chest and Back </Link>
                </div>

                <div className="abdomen-link"> 
                  <Link to="/child/abdomen"> Abdomen and Hip  </Link>
                </div>

                <div className="other-link"> 
                  <Link to="/child/other"> Other</Link>
                </div>
             </div>

           <div className="childbody-image">
             <img src={childbody} alt=""/>
            </div> 
         </div>

            </main>
            

        </div>
    )
}

export default Child;

