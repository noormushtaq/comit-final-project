import React from 'react';
import Headforth from './Headforth';


function Headfirstresult() {
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
               Headaches are common with diseases such as colds and other viral diseases that occur frequently in children. Occurs with sinuses too and sometimes with allergies.

               Acetaminophen or ibuprofen may help your child get better. Follow the dosage directions carefully on the package.If you are not sure how much to give, contact your doctor. 
               It is recommended to give him comfort and plenty of fluids.

               If any of the symptoms worsen or if your child does not get better within two to three days, contact your doctor.

               </p>
               <button className="result-button"
                     onClick={toggleHidden}
                      > back
               </button> 
             </div> }

                  {!isHidden &&
                 <div>
                 <Headforth />
                 </div>}
                
                
       </div>

    )

}

export default Headfirstresult;