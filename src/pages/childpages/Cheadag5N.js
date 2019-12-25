import React from 'react';
import Cheadag6Y from './Cheadag6Y';
import Cheadag6N from './Cheadag6N';

function Cheadag5N() {
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
               <div className="paragraph-info">

                 <h3>Did your child start taking a new medicine at the time of the headache?</h3>

               </div> 
            
               <button className="result-button"
                     onClick={toggleHidden}
                      > yes
               </button> 

               <button className="result-button"
                       onClick={togglemyHidden}
                      > No 
                  </button>
             </div> }

                  {!isHidden &&
                 <div>
                 <Cheadag6Y/>
                 </div>}

                 {!myclick &&
                 <div>
                 <Cheadag6N/>
                 </div>
                
                 }

                
                
       </div>

    )

}

export default Cheadag5N;