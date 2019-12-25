import React from 'react';
import Cheadag4Y from './Cheadag4Y';
import Cheadag4N from './Cheadag4N';

function Cheadag3N() {
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

                 <p>These are signs of migraines, although it is important to remember that migraines in children can be difficult to diagnose, but there is another reason is that it is always a good idea to discuss a doctor when the headache does not go away.</p>
                 <h3>Is any of the following true?</h3>

               </div> 
              
              <lu className="test">
                  <li>My child sleeps less than 8-10 hours every night</li>
                  <li>My child skips meals (especially breakfast)</li>
                  <li>My child drinks very little fluids with meals and rarely drinks between meals</li>
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
                 <Cheadag4Y/>
                 </div>}

                 {!myclick &&
                 <div>
                 <Cheadag4N/>
                 </div>
                
                 }

                
                
       </div>

    )

}

export default Cheadag3N;