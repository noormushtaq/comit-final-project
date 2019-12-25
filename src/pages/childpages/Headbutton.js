import React from 'react';

import Headfirstresult from './Headfirstresult';
import Headsecondresult from './Headsecondresult';

import Close from './Close.jpg'



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
             <h1 className="body-choose-q">Headache in children</h1>
              <p className="paragraph-info">Headaches are very common in children. Most often it is not dangerous, and responds to simple treatments.

                 If your child has a headache, this guide will help you find out the possible causes and treatments.

                 Please remember that this guide does not replace contacting or visiting a doctor.</p>
              <div className="paragraph-info" >
              <h3>Does your child have any of the following symptoms?</h3>
              
              <lu className="test">
                  <li>Severe headache</li>
                  <li> High fever a temperature of 38.8 o C or higher</li>
                  <li> Severe inactivity</li>
                  <li> stiff neck</li>
                  <li> A rash that looks like dots, dark under the skin</li>
                  <li>  Problem with walking, talking or seeing</li>
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
                 <Headfirstresult />
                 </div>
                
                 }

               {!myclick &&
                 <div>
                 <Headsecondresult />
                 </div>
                
                 }
       </div>

    )

}

export default Headbutton;