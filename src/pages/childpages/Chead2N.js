import React from 'react';

import Cheadin3Y from './Cheadin3Y';
import Cheadin3N from './Cheadin3N';


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

                 <h3>Was it a head injury to your child, as a result of any of the following? </h3>

                 <lu className="test">
                  <li>Falling from a high place (for example, a window or a roof)</li>
                  <li> Hitting something very fast (for example, hitting a baseball bat)</li>
                  <li> To collide with something that is running at a high speed (for example, a car accident or skiing).</li>
                 </lu>
             
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
                 <Cheadin3Y/>
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Cheadin3N/>
                 </div>
                
                 }
        

       </div>

    )

}

export default Chead2N;