import React from 'react';

import Cheadin4Y from './Cheadin4Y';
import Cheadin4N from './Cheadin4N';


function Chead2N() {
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
             
              <div className="paragraph-info" >
                  <p>It is very common for a child to be vomiting once or twice after an injury. This does not necessarily mean that the head injury is severe. While more frequent vomiting requires immediate medical attention</p>
                  <p>If your child has vomit within 6 hours of a head injury, seek medical attention immediately.</p>
                  <h3>Does your child vomit after an injury?</h3>
               </div>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Yes
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      > No
                  </button>

                 </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Cheadin4Y />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Cheadin4N />
                 </div>
                
                 }
        

       </div>

    )

}

export default Chead2N;