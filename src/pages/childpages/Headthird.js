import React from 'react';
import Headsecond from './Headsecond';


function Headfirstresult() {
    let [isHidden,setisHidden]=React.useState(true);

    function toggleHidden(){
        setisHidden(!isHidden)
                               }
    
    return (
         <div>
             {isHidden &&
            <div>
               <h1 className="body-choose-q">Call your doctor today.</h1>
               <p className="paragraph-info">
               Headaches can be due to increased pressure inside the brain. Your child often needs a thorough examination and brain scan, such as a CT scan or an MRI.

               </p>
               <button className="result-button"
                     onClick={toggleHidden}
                      > back
               </button> 
             </div> }

                  {!isHidden &&
                 <div>
                 <Headsecond />
                 </div>}
                
                
       </div>

    )

}

export default Headfirstresult;