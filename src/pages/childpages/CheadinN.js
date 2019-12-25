import React from 'react';

import Cheadin1N from './Cheadin1N';
import Cheadin1Y from './Cheadin1Y';

function CheadinN(){

    let [isHidden,setisHidden]=React.useState(true);
    let [myclick,setmyclick]=React.useState(true);

    function toggleHidden(){
        setisHidden(!isHidden)
                               }
    function togglemyHidden(){
        setmyclick(!myclick)
                               }

    return(
           <div>
               {isHidden && myclick &&
               <div>
                <h1 className="body-choose-q">Head injury in children</h1>
                <p className="paragraph-info">thats good. However, other symptoms associated with a head injury are still important and warrant immediate medical evaluation.</p>
               
                <div className="paragraph-info" >
                  <h3>Does your child have any of the following symptoms?</h3>
               
                 <lu className="test">
                  <li>Does not act normally</li>
                  <li> Can not wake up</li>
                  <li> Suffering from confusion</li>
                  <li> Severe or disturbing headache</li>
                  <li>Intermittent speaking or difficulty speaking</li>
                  <li> Blurred or double vision</li>
                  <li>Numbness or weakness</li>
                  <li>He does not walk normally or has trouble performing other normal activities</li>
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
                 <Cheadin1Y />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Cheadin1N />
                 </div>
                
                 }
        
                
                
           
           </div>
    )
}

export default  CheadinN;