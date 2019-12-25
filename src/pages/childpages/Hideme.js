import React from 'react';

import CheadinY from './CheadinY';
import CheadinN from './CheadinN';





function Hideme() {

    let [isHidden,setisHidden]=React.useState(true);
    let [myclick,setmyclick]=React.useState(true);
  
    function toggleHidden(){
        setisHidden(!isHidden)
                               }
    function togglemyHidden(){
        setmyclick(!myclick)
                              }
         
    
    return (
         <div>
            
             {isHidden && myclick && 
            <div>
               
                 <h1 className="body-choose-q">Head injury in children</h1>
              <p className="paragraph-info">
              Children often hit their heads. The infection is often small and includes only the scalp. There is no need to do anything. Sometimes the injury is more serious, including the skull and / or brain inside, when medical attention is needed.

              Answering the following questions will help you to understand the difference between small, serious head injuries and will help you decide what to do when your child's head is injured.

              Remember, this guide is not intended to replace a doctor's consultation.
             </p>
             <div className="paragraph-info" >
                <h3>Did your child hit his head and suffer from any of the following symptoms?
                </h3>
                <lu className="test">
                  <li>Unconscious (did not respond to you or passed out)</li>
                  <li> Cramps (muscle spasms)</li>
                  <li> Severe crying continues</li>
                 </lu>
             </div>

             <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Yes, He has.
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      > No, He does not
                  </button>

                 </div>
                 </div>
                }
           
                 {!isHidden &&
                 <div>
                 <CheadinY />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <CheadinN />
                 </div>
                 }
                
                
           
       
       </div>

    )

}

export default Hideme;