import React from 'react';

import Cheadin1N from './Cheadin1N';



function Chead2Y() {
    let [isHidden,setisHidden]=React.useState(true);
   
    function toggleHidden(){
        setisHidden(!isHidden)
                               }
   
    return (
         <div>
              {isHidden && 
             <div>
             <h1 className="body-choose-q">Head injury in children</h1>
              <p className="paragraph-info">Go to medical care immediately
               </p>
              <p className="paragraph-info" >
                 Your child may have a fractured skull
              </p>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Back
                  </button>

              </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Cheadin1N/>
                 </div>
                
                 }

              
        

       </div>

    )

}

export default Chead2Y;