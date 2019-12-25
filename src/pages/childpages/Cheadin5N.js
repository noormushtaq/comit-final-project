import React from 'react';

import Cheadin4Y from './Cheadin4Y';



function Cheadin5N() {
    let [isHidden,setisHidden]=React.useState(true);
   
    function toggleHidden(){
        setisHidden(!isHidden)
                               }
     
    return (
         <div>
              {isHidden && 
             <div>
             <h1 className="body-choose-q">Head injury in children</h1>
             
              <div className="paragraph-info" >

                 <p>Give the child only fluids, until at least two hours have passed without vomiting.</p>
                 <p>If vomiting continues for 6 hours or more after an injury, refer to medical care immediately.</p>
               </div>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Back
                  </button>

              </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Cheadin4Y />
                 </div>
                
                 }
       </div>

    )

}

export default Cheadin5N;