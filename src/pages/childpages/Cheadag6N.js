import React from 'react';
import Cheadag5N from './Cheadag5N';

function Cheadag6N() {
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

                 <p>Your child has a frequent headache for no apparent reason.</p>
                 <p>Most types of headaches in children are not dangerous, but it is preferable to make an appointment with the doctor to discuss and detect headaches and perform a full examination.</p>
               
               </div> 

               <button className="result-button"
                     onClick={toggleHidden}
                      > Back
               </button> 
             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag5N/>
                 </div>}
  
       </div>

    )

}

export default Cheadag6N;