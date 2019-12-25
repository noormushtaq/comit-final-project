import React from 'react';

import CheadinN from './CheadinN';

function Cheadin1Y(){
    let [isHidden,setisHidden]=React.useState(true);

    function toggleHidden(){
        setisHidden(!isHidden)
                               }

    return(
           <div>
              {isHidden &&
             <div>
             <h1 className="body-choose-q">Head injury in children</h1>
              <p className="paragraph-info">Call emergency care immediately</p>
              <p className="paragraph-info">Your child may have a brain injury.</p>
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Back
                  </button>

              </div>
                
                 </div>}
                 {!isHidden &&
                 <div>
                 <CheadinN />
                 </div>
                 }
               
           </div>
    )
}

export default  Cheadin1Y;