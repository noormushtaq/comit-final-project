import React from 'react';
import Headbutton from './Headbutton'

function PrintTheResult(props){

    let{name,email,title,description}=props;
    let [isHidden,setisHidden]=React.useState(true);

    function toggleHidden(){
        setisHidden(!isHidden)
                               }

    function handleSubmit(){
        alert("Your result has been sent");
    }
       
    return(

        <div >{isHidden &&
                 <div> 
                    <h3>Thank you &nbsp;<span style={{color:"orange"}}> {name} </span>&nbsp; for useing Online Doctor</h3>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Your result will be send to this email<span style={{color:"brown"}}> {email} </span> </p>
                    <br />
                    <div>
                      <button  className="result-button" type="submit" onClick={handleSubmit}>Ok</button>
                      <button  className="result-button" onClick={toggleHidden}>Start Questions again</button> 
                    </div>
                 </div>}
                 {!isHidden &&
                 <div>
                 <Headbutton />
                 </div>}
        </div>
    )
}

export default PrintTheResult;