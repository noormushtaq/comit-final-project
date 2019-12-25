import React from 'react';

import Chead2Y from './Chead2Y';
import Chead2N from './Chead2N';


function Headbutton() {
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
              <p className="paragraph-info">Deep skull or wound in the skull likely, possibly causing a skull fracture</p>
              <div className="paragraph-info" >
              <h3>Is your child experiencing denting, a low area or deep wound on the scalp?
                   </h3>
              
             </div>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Yes, He has.
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      > No, He does not
                  </button>

                 </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Chead2Y />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Chead2N />
                 </div>
                
                 }
        

       </div>

    )

}

export default Headbutton;