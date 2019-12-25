import React from 'react'; 
import man from './man.jpg';
import woman from './woman.jpg';
import child from './child.jpg';
import image3 from './image3.jpg';



import {Link}from 'react-router-dom';

  
  

function Index(){

    return(
     
        <div >
        
            <main>
            <h1 className="page-title"> Online Doctor...</h1>

            <p className="paragraph-info">Welcome to Online Doctor..  Health database use to diagnose the symptoms of the patients. We try to give the possible treatment and advice related to the patients' symptoms. 
               Also, you can measure your BMI (Body Mass Index).
               <br /> Having a healthy life for each one is our goal in this website we provide a medical information so the users can live better and healthier lives.  But, you should know this website will 
               never replace the doctor   </p>  

               <p className="paragraph-info">to start diagnose your symptoms please, choose one of these category. </p>
          
               <div className="home-container">
            <fieldset>
                <legend> Choose one of these category</legend>

                <div className="categary-image">

                  <div className="man">
                     <Link to="/man"><img src={man} alt="" />Man</Link>
                       </div>

                      <div className="woman">
                        <Link to="/woman"><img src={woman} alt="" />Woman</Link>
                      </div>

                      <div className="child">
                        <Link to="/child"> <img src={child} alt="" />Child</Link>
                       </div>

                   </div>

            </fieldset>
            

             <div className="family-pic">
             <img src={image3} alt="" />
             </div> 

            </div>

          
          
            <p className="paragraph-info">
               Body mass index, or BMI, is a measure of body size. It combines a person's weight with their height. 
               The results of a BMI measurement can give an idea about whether a person has the correct weight for their height.
               </p>
               <p className="paragraph-info">
               BMI is a screening tool that can indicate whether a person is underweight or if they have a healthy weight,
                excess weight, or obesity. If a person's BMI is outside of the healthy range, their health risks may increase significantly.
                Here you can measure your BMI: 
                 </p>


              <div className="bmi-link">
                  <Link to="/bmicalculator"> <h1 >Body Mass Index (BMI)</h1></Link>
              </div>
           </main>
           
        </div>
      
    )
}

export default Index;
