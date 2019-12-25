import React from 'react';

import Chead2N from './Chead2N';



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
              <p className="paragraph-info">
               </p>
              <p className="paragraph-info" >
              Contact your doctor now. Injuries that occur in this way are often dangerous.
              </p>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Back
                  </button>

              </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Chead2N/>
                 </div>
                
                 }

              
        

       </div>

    )

}

export default Chead2Y;