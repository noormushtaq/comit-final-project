import React from 'react';

function BMIcalculator(){
    let[weightNumber,setweightNumber]=React.useState(null);
    let[heightNumber,setheightNumber]=React.useState(null);
    let[result,setresult]=React.useState(0);
    let[textResult,settextResult]=React.useState('');
 
    let[myColor,setmycolor]=React.useState('');
    
    function handleWeightNumber(event) {
        setweightNumber(event.currentTarget.value);
         }

  function handleHeightNumber(event) {
        setheightNumber(event.currentTarget.value);
        }

        function calculatBMI(){
     
          setresult(Math.round(weightNumber/(heightNumber*heightNumber)));
          
          let result=(Math.round(weightNumber/(heightNumber*heightNumber)));
           
         

            if (result>=18.5&&result<25) {
              settextResult("Normal");
              setmycolor("green");
              } 
            else 
                if (result>=25&&result<30) {
                    settextResult("over weight");
                    setmycolor("orange");
                   
                      } 
                else if (result>=30){
                      settextResult("Obese");
                      setmycolor("red");
                 }
                    else if (result<18.5){
                       settextResult("Under weight");
                       setmycolor("blue")
                 }
                    else{
                       settextResult("Please enter numbers only");
                       setmycolor("red");
                       setresult('');
                       }
              

               setweightNumber('');
               setheightNumber('');     
          
        }


    return(
        <div>
            <main>
              <h1 className="page-title"> Body Mass Index (BMI)</h1>
              <p className="paragraph-info">
               BMI is a screening tool that can indicate whether a person is underweight or if they have a healthy weight,
                excess weight, or obesity. If a person's BMI is outside of the healthy range, their health risks may increase significantly.
                Here you can measure your BMI: 
                 </p>

                 <p className="paragraph-info">
                     Note: This Calculator cannot use with persons under 18 years old, Pregnant, and lactating women. </p>  
                 <p className="paragraph-info">
                    You can Calculate the BMI using this equation </p>
                    <p className="Bmi-equation">
                        BMI=weight(Kg)/height(m)*height(m)</p>
              <div className="BMI-Explain">

              <div className="BMI-container">
                  <div className="Bmi-title">
                    <h1 >Body Mass Index (BMI) Calculator</h1>
                 </div>
               <div className="BMIcalculator">
                 <label>Enter your weight in kg (ex. 35)</label>
                 <input
                  type="number"
                  value={weightNumber}
                  onChange={handleWeightNumber}
                  />
                </div>

                <div className="BMIcalculator">
                  <label>Enter your height in meter (ex. 1.3)</label>
                  <input
                   type="number"
                   value={heightNumber}
                   onChange={handleHeightNumber}
                   />
                </div>

                <div className="displayTheResult">
                    <div className="my-result-number">
                    <p>Your BMI result is... {result}</p>
                    </div>
                   <div className="my-result">
                       <p>You are...</p>
                       <p style={{color:myColor}}>{textResult}</p>
                   </div>

                </div>
          
                <div className="thisbutton">
                   <button 
                           onClick={calculatBMI}>
                           Calculate</button>
                </div> 
          
             </div>

             <div className="BMI-content">
             <p >
             The standard weight status categories associated with BMI <br />ranges for adults are shown in the following table.
               </p>
                 <table >
                 <tr>
                 <th>Categary</th>
                  <th>from</th>
                  <th>to</th>
                 </tr>
                 <tr>
                 <td>UnderWeight</td>
                 <td></td>
                 <td>under 18.5</td>
                </tr>
                <tr>
                <td>Normal</td>
                <td>18.5</td>
                <td>24.9</td>
                </tr>
                <tr>
                <td>OverWeight</td>
                <td>25</td>
                <td>29.9</td>
                </tr>
                <tr>
                <td>Obese</td>
                <td>30 and more</td>
                <td></td>
                </tr>
                
               </table> 

             </div>

             </div>

            </main>
        </div>
    )
}

export default BMIcalculator;