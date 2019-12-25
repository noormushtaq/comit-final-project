import React from 'react';
import Cheadag4N from './Cheadag4N';

function Cheadag5Y() {
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

                 <p>Stress, anxiety and depression can all cause headaches.</p>
                 <p>Talk to your child and your doctor about ways to improve how you feel. Such as: stopping certain activities, talking to teachers about additional strategies or assistance, or counseling.</p>
                 <p>If the headache persists, or if the signs of psychological stress, anxiety or depression persist in the child despite these efforts, be sure to tell the doctor so that you can work together, to know how to help the child.</p>
               
               </div> 

               <button className="result-button"
                     onClick={toggleHidden}
                      > Back
               </button> 
             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag4N/>
                 </div>}
  
       </div>

    )

}

export default Cheadag5Y;