import React from 'react';
import Cheadag5Y from './Cheadag5Y';
import Cheadag5N from './Cheadag5N';

function Cheadag4N() {
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
                   <h3>Is any of the following true?</h3>
               </div> 
              
              <lu className="test">
                  <li>Your child seems more anxious than usual.</li>
                  <li>Your child seems sad or indifferent in school, not enjoying activities or not interested in friends?</li>
                  <li>Your child has problems at school or another part of his life.</li>
                  <li>Your child is under a lot of stress from school, competitive sports or some other activity.</li>
                  <li>A recent major change has occurred in your child's life, such as: moving to another home, new school, new brother, death or divorce.</li>
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
                 <Cheadag5Y/>
                 </div>}

                 {!myclick &&
                 <div>
                 <Cheadag5N/>
                 </div>
                
                 }

                
                
       </div>

    )

}

export default Cheadag4N;