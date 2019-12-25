
import React from 'react';

import Headsix from './Headsix';

function Cheadag1Y() {
    let [isHidden,setisHidden]=React.useState(true);
   

    function toggleHidden(){
        setisHidden(!isHidden)
                               }

    return (
         <div>
             {isHidden && 
            <div>
               <h1 className="body-choose-q">Headaches in children</h1>
               <p className="paragraph-info">
                 It is reassuring that the headache did not occur in a long time.
               </p>
               <p className="paragraph-info">
                  Do not need to worry but, if the headache increases please contact your doctor
               </p>

               <button className="result-button"
                     onClick={toggleHidden}
                      >Back
               </button> 

             </div> }

                  {!isHidden &&
                 <div>
                 <Headsix />
                 </div>}

       </div>

    )

}

export default Cheadag1Y;