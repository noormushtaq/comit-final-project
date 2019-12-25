import React from 'react';
import Headsecondresult from './Headsecondresult';


function Headfirst(){
    let [isHidden,setisHidden]=React.useState(true);

    function toggleHidden(){
        setisHidden(!isHidden)
                               }

    return (
       
           
           <div>
                {isHidden &&
            <div>
              <h1 className="body-choose-q">Contact your doctor now</h1>
              <p className="paragraph-info">
              While headaches are very common after a head trauma, it can also be a sign of severe head injury. Your doctor will tell you if you should bring your child to be examined.

              </p>
              <button className="result-button"
                     onClick={toggleHidden}
                      > back
               </button> 
             </div> }

                  {!isHidden &&
                 <div>
                 <Headsecondresult />
                 </div>}
              
            </div> 
               
    )
               
     
}
export default Headfirst;