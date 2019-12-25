import React from 'react';
import Cheadag1N from './Cheadag1N';

function Cheadag2Y() {
    let [isHidden,setisHidden]=React.useState(true);
    

    function toggleHidden(){
        setisHidden(!isHidden)
                               }
  
    return (
         <div>
             {isHidden && 
            <div>
               <h1 className="body-choose-q">Headaches in children</h1>
               <p className="paragraph-info">
               It is good that the headache is not repeated.  
               </p>
               <p className="paragraph-info">If the headache increase please contact your doctor</p>

               <button className="result-button"
                     onClick={toggleHidden}
                      > Back
               </button> 
            </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag1N />
                 </div>}

       </div>

    )

}

export default Cheadag2Y;