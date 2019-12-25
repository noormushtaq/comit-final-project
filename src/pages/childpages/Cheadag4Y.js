import React from 'react';
import Cheadag3N from './Cheadag3N';

function Cheadag4Y() {
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

                 <p>As with adults, headache can occur in children due to lack of sleep, bad eating habits or dehydration.</p>
                 <p>Have your child sleep, eat and drink well, this is important for general health, and not just for headache prevention!</p>
                 <p>If the headache persists or worsens in any way, contact the doctor.</p>
               </div> 
               <button className="result-button"
                     onClick={toggleHidden}
                      > Back
               </button>
             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag3N/>
                 </div>}    
       </div>

    )

}

export default Cheadag4Y;