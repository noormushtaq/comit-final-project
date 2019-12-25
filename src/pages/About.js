import React from 'react'; 

function About(){

    return(

        <div>
            <main>
            
            <h1 className="page-title"> About Me</h1>
           
            <div className="paragraph-info">
            
               <p>Sometimes, any person could have a curiosity to know about his/her health
                condition before going to the hospital or clinic.  <br />This website offers a good knowledge about unhealthy symptoms.</p>
                <br />
                <p>I would like to thank my instructor<span style={{color:"brown"}}> Ozzie Neher</span> and the coordinator <span style={{color:"brown"}}>Leah</span>from ComIT, Canada for
                all the supporting and help.</p>
               <p> I had helped by a great experience doctor in Saskatoon Royal hospital, Canada <span style={{color:"brown"}}>Dr.ANITA DHIR </span> MD FRCP(C) to put health information in reality.
               <br /> I am very thankfull for her help </p>
              
              
               <p>For creating this website I used HTML, CSS, JavaScript and React JS.</p>
               <p>The technique I used to shaw the questions for the user is Toggle the div (Show and Hide the div). </p>
               
            </div> 
            <br />
            <br />  
               <div className="paragraph-info">
                  <p>who am I?</p>
                  <p> I am <span style={{color:"brown"}}>Noor Al-Sabbagh</span> a front end web developer and illustrator. I have a bachelor degree in Computer
                  Science 2007 and REACT JS Certficate 2019 from ComIT, Canada</p>
               </div>
            </main>
           
        </div>
    )
}

export default About;
