import React from 'react';
import Cheadag2N from './Cheadag2N';

function Cheadag3Y() {
    let [isHidden,setisHidden]=React.useState(true);
   

    function toggleHidden(){
        setisHidden(!isHidden)
                               }
   
    return (
         <div>
             {isHidden && 
            <div>
               <h1 className="body-choose-q">Headaches in children</h1>
               <div className="paragraph-info">

                 <p>Your child may have a migraine, which is common in children.</p>
                 <p>Make an appointment with the pediatrician to examine your child and discuss headaches with him. If your child agrees with this diagnosis, if the headache is frequent or severe enough to disrupt your child’s daily life, your doctor may want to prescribe a medication to prevent it.</p>
                 <p>While you're waiting for an appointment with the doctor, try the following:</p>
               </div> 
              
              <lu className="test">
                  <li>Make sure your child eats regularly, gets at least 8-10 hours of sleep each night and drinks fluids throughout the day, as this can help him prevent headaches.</li>
                  <li>If your child has a headache, give ibuprofen (make sure to follow the dose instructions carefully), and make him rest in a quiet, dark room.</li>
              </lu>

               <button className="result-button"
                     onClick={toggleHidden}
                      > Back
               </button> 

             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag2N/>
                 </div>}
                
       </div>

    )

}

export default Cheadag3Y;