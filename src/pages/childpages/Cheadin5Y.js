import React from 'react';

import Cheadin4Y from './Cheadin4Y';



function Cheadin5Y() {
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

                <p>Seek emergency care immediately.</p>
                <p>Vomiting that persists or worsens can be a sign of a brain injury.</p>

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

export default Cheadin5Y;