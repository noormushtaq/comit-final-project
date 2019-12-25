import React from 'react';
import Headfifth from './Headfifth';
import Headsix from './Headsix';

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
               <h1 className="body-choose-q">Headaches in children</h1>
               <p className="paragraph-info">
               Okay. These were signs of increased brain pressure and required urgent contact with the doctor.
               </p>
               <p className="paragraph-info">Does your child have any of the following symptoms with headaches?</p>
              
              <lu className="test">
                  <li>Fever (temperature below 38.8 C)</li>
                  <li>Runny nose</li>
                  <li>Cough</li>
                  <li>Sore throat</li>
                  <li>Stomach pain (mild)</li>
                  <li>Diarrhea</li>
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
                 <Headfifth />
                 </div>}

                 {!myclick &&
                 <div>
                 <Headsix />
                 </div>
                
                 }

                
                
       </div>

    )

}

export default Headfirstresult;