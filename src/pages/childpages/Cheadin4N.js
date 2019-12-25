import React from 'react';

import Cheadin3N from './Cheadin3N';



function Cheadin4N() {
    let [isHidden,setisHidden]=React.useState(true);
   
    function toggleHidden(){
        setisHidden(!isHidden)
                               }
   
    return (
         <div>
              {isHidden && 
             <div>
             <h1 className="body-choose-q">Head injury in children</h1>
              <p className="paragraph-info">That is good. 
               </p>
              <p className="paragraph-info" >
              If your child has vomit within 6 hours of a head injury, seek medical attention immediately.
              </p>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Back
                  </button>

              </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Cheadin3N/>
                 </div>
                
                 }

              
        

       </div>

    )

}

export default Cheadin4N;