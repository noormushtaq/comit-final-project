import React from 'react'; 

import {Link}from 'react-router-dom';

import humenbody from './humenbody.jpg';



function Woman(){

    return(

        <div>
            <main>
            <h1 className="page-title">Woman</h1>
            
           
            <p  className="paragraph-info">Welcome to the Women's Health Symptoms Diagnostic. Here you can diagnose your symptoms and identify possible health conditions by answering a series of questions. But first you have to choose the area where your symptoms appear in your body:</p>
            
            <h2 className="body-choose-q">Choose a part of the woman's body</h2>
            
         <div className="humen-body">
              <div className="body-link">

                <div className="head-link">
                  <Link to="/woman/womenheadn">Head and Neck</Link>
                </div>

                <div className="eyes-link">   
                  <Link to="/woman/womeneyes">Eyes </Link> 
                </div>

                <div className="ears-link">
                  <Link to="/woman/womenears"> Ears, Nose and Throat  </Link>
                </div>

                <div className="chest-link">
                  <Link to="/woman/womenchest">Chest and Back </Link>
                </div>

                <div className="abdomen-link"> 
                  <Link to="/woman/womenabdomen"> Abdomen and Hip  </Link>
                </div>

                <div className="abdomen-link"> 
                  <Link to="/woman/arms"> Arms and Hands  </Link>
                </div>

                <div className="legs-link"> 
                  <Link to="/woman/womenlegs"> Legs  </Link>
                </div>

                <div className="other-link"> 
                  <Link to="/woman/womenother"> Other</Link>
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

export default Woman;