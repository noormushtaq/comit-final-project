import React from 'react';
import Cheadag2Y from './Cheadag2Y';
import Cheadag2N from './Cheadag2N';

function Cheadag1N() {
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
                <p>
                  You said: Your child has had a headache for more than two weeks.
               </p>
               <h3>How often does a headache happen?</h3>
            </div>
             
             <button className="result-button"
                     onClick={toggleHidden}
                      > Once a week or less
               </button> 

               <button className="result-button"
                       onClick={togglemyHidden}
                      > more than that
                  </button>
             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag2Y />
                 </div>}

                 {!myclick &&
                 <div>
                 <Cheadag2N />
                 </div>
                
                 }

                
                
       </div>

    )

}

export default Cheadag1N;