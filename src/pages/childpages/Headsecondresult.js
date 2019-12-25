import React from 'react';

import Headfirst from './Headfirst';
import Headsecond from './Headsecond';


function Headsecondresult () {
  
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
              Did your child's headache appear after a head trauma? </p>
          
                  <button  className="result-button-q"
                    onClick={toggleHidden} > Yes, He had his headache after head trauma
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      > No, He does not
                  </button>
              </div>
                    }
                  {!isHidden &&
                 <div>
                 <Headfirst />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Headsecond />
                 </div>
                
                 }

       </div>
    )

}

export default Headsecondresult;