import React from 'react';

import Headthird from './Headthird';
import Headforth from './Headforth';


function Headsecond(){
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
              Great, no shock to the head.
              Severe or persistent headaches after a trauma can be a sign of a serious head injury; therefore, it's best to always discuss with your doctor if your child has a headache after a head collision.</p>
              <p className="paragraph-info">Is any of the following true for your child's headache?</p>
              
              <lu className="test">
                  <li>Wake him up from sleep</li>
                  <li> It happens when he wake up in the morning</li>
                  <li>Accompanied by puke</li>
              </lu>

              <button  className="result-button-q"
                    onClick={toggleHidden} > Yes, One or more is correct
                  </button>

                  <button className="result-button"
                       onClick={togglemyHidden}
                      > No one from these
                  </button>
              </div>
                    }
                  {!isHidden &&
                 <div>
                 <Headthird />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Headforth />
                 </div>
                
                 }

             
              
            </div> 
               
    )
               
     
}
export default Headsecond;