import React from 'react';

import Cheadin5Y from './Cheadin5Y';
import Cheadin5N from './Cheadin5N';


function Cheadin4Y() {
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

                 <h3>How many times did your child vomit after the injury?</h3>

               </div>
             
              <div className="q-button">
                  
                  <button  className="result-button"
                    onClick={toggleHidden} > Three times or more
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      > One time or two 
                  </button>

                 </div>
                
                 </div>}

                 {!isHidden &&
                 <div>
                 <Cheadin5Y />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Cheadin5N/>
                 </div>
                
                 }
        

       </div>

    )

}

export default Cheadin4Y;