import React from 'react';

import Cheadag1Y from './Cheadag1Y';
import Cheadag1N from './Cheadag1N';



function Headfirstresult() {
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
               <h1 className="body-choose-q">Headache in children</h1>
               <p className="paragraph-info">
               Headache usually occurs with common diseases, but this does not seem to be the case with your child.
               </p>

               <div className="paragraph-info">
                 
                 <h3>How long does your child suffer from headaches?</h3>
                
              </div>
              
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Less than two week
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      >More than two week
                  </button>

                 </div>
                
                 </div>}


                  {!isHidden &&
                 <div>
                 <Cheadag1Y />
                 </div>}

                 {!myclick &&
                 <div>
                 <Cheadag1N />
                 </div>}     
       </div>

    )

}

export default Headfirstresult;