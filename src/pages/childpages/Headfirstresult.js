import React from 'react';
import Headbutton from './Headbutton';
import PrintTheResult from './PrintTheResult';



function Headfirstresult() {
    let [isHidden,setisHidden]=React.useState(true);
    let [myclick,setmyclick]=React.useState(true);


        
    let [name, setName] = React.useState('');
    let [email, setEmail] = React.useState('');
    

    function toggleHidden(){
        setisHidden(!isHidden)
                               }

    function togglemyHidden(){
        
        if(name===""|| email===""){
            alert("Please full all the information")
        }else
        setmyclick(!myclick)   }

    function handleName(event) {
            setName(event.currentTarget.value);}

    function handleEmail(event) {
            setEmail(event.currentTarget.value);}  
    return (
         <div>
             {isHidden && myclick &&
            <div>
               <h1 className="body-choose-q">Your child needs immediate medical attention.</h1>
               <p className="paragraph-info">
                  Headaches can be caused by a serious infection or brain problem. Go to the nearest emergency department immediately and if this is difficult, for any reason call the emergency number of your country.
               </p>
              
               
              <div className="PrintTheResult">

               <h3>Send the result to your email</h3>
               <form method="post">
                        <div className="printName">
                        <label>Name</label>
                        <input 
                        type="text"
                        value={name}
                        onChange={handleName} required/>
                        </div> 
                        
                        <div className="printName">
                        <label>Email</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={handleEmail} required/>
                        </div>
                </form>
                <br />
               
                </div>

               <button className="result-button"
                     onClick={toggleHidden}
                      > back
               </button>
               <button className="result-button"
                     onClick={togglemyHidden}
                      >Send
               </button> 
               
             </div> 
            }

                  {!isHidden &&
                 <div>
                 <Headbutton />
                 </div>}

                 {!myclick &&
                 <div>
                 <PrintTheResult
                 name={name}
                 email={email}
                 title="Headache in children" 
                 description="Your child needs immediate medical attention. Headaches can be caused by a serious infection or brain problem. Go to the nearest emergency department immediately and if this is difficult, for any reason call the emergency number of your country."
                     />
                 </div>
                
                 }
                
                
       </div>

    )

}

export default Headfirstresult;