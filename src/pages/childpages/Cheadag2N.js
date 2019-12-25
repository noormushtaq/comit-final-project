import React from 'react';
import Cheadag3Y from './Cheadag3Y';
import Cheadag3N from './Cheadag3N';

function Cheadag2N() {
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
               <h1 className="body-choose-q">Headaches in children</h1>
               <div className="paragraph-info">

                 <p>Okay. These were signs of increased brain pressure and required urgent contact with the doctor.</p>
                 <h3>Is any of the following true?</h3>

               </div> 
              
              <lu className="test">
                  <li>Your child will sometimes see lights or suffer from vision changes before a headache occurs.</li>
                  <li>Your child sometimes feels nauseous or vomits alongside a headache.</li>
                  <li>When your child suffers from a headache, he is disturbed by the noise and lights.</li>
                  <li>Your child suffers from car travel sickness.</li>
                  <li>Migraine headaches have been diagnosed by family members.</li>
              </lu>

               <button className="result-button"
                     onClick={toggleHidden}
                      > yes
               </button> 

               <button className="result-button"
                       onClick={togglemyHidden}
                      > No one from these
                  </button>
             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag3Y/>
                 </div>}

                 {!myclick &&
                 <div>
                 <Cheadag3N/>
                 </div>
                
                 }

                
                
       </div>

    )

}

export default Cheadag2N;