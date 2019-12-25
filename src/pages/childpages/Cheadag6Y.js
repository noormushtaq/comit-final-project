import React from 'react';
import Cheadag5N from './Cheadag5N';



function Cheadag6Y() {
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

                 <p>Headache can be a side effect of many medications.</p>
                 <p>Talk to your doctor about the possibility that a child’s medication is the cause of the headache.</p>
                 <p>If your doctor does not believe that the medication is causing the headache, or if the headache does not go away after stopping the medication, then make an appointment with the doctor for your child, to be fully examined for other reasons.</p>
               
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

export default Cheadag6Y;