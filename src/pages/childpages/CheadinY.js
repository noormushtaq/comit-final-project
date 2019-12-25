import React from 'react';

import Hideme from './Hideme';

function CheadinY(){
    let [isHidden,setisHidden]=React.useState(true);

    function toggleHidden(){
        setisHidden(!isHidden)
                               }

    return(
           <div>
              {isHidden &&
             <div>
             <h1 className="body-choose-q">Ask for emergency care now!</h1>
              <p className="paragraph-info">Your child may have a serious brain injury.</p>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Back
                  </button>

              </div>
                
                 </div>}
                 {!isHidden &&
                 <div>
                 <Hideme />
                 </div>
                 }
               

              
        
           </div>
    )
}

export default  CheadinY;