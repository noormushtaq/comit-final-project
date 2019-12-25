import React from 'react'; 
import {Link} from  'react-router-dom';
import Input from './Input';

import github from './github.jpg';
import linkedin from './linkedin.jpg';
import envelope from './envelope.jpg'





function Contact(){

        let [name, setName] = React.useState('');
        let [email, setEmail] = React.useState('');
        let [message, setmessage] = React.useState('');
        
        
        function handlemassegeChange(event) {
            setmessage(event.currentTarget.value);}
          

        function handlesubmit(event) {
            event.preventDefault();

            if (name === "" || email === ""|| message==="") {
               alert("please fill all the information")
            } else {
              alert("your message has been sent. Thank you");
            }

            setmessage("");
            setName("");
            setEmail("");
          }
         
           
    return(

        <div>
            <main>
             
              <div className="contactContainer">
              <h1 className="contactTitle"> Contact Us</h1>
                  <p className="contatText"> Have any question? Please, send us your message.</p>
                  <p className="contatText"> We are happy to help</p>

                 
                  <form onSubmit={handlesubmit} 
                      method="post">
                  <div className="contactInput">
                    <div className="labelName">
                    <label>Name</label>
                    <Input 
                      type="text"
                      value={name}
                      onChange={setName}
                      />
                    </div> 
                    
                    <div className="labelName">
                    <label>Email</label>
                    <Input 
                    type="email"
                    value={email}
                    onChange={setEmail} />
                    </div>

                  </div>  
                    
                    <div className="contactBox">
                  <label>Message</label>
                    <textarea 
                    value={message} 
                    onChange={handlemassegeChange}></textarea>
                    </div>
                    
                    <div className="contactButton">
                      <button  type="submit"> &emsp;&nbsp; &nbsp;
                       send</button>  
                    </div>
                  
                </form>
               
            </div>

            <div className="contactContainer">
                <h1 className="contactTitle"> Contact Information</h1>
                <p className="contatText">Name: Noor Al-Sabbagh</p>
                <p className="contatText">CellPhone:(306) 716-0496</p>
                <p className="contatText">Email: noormushatq1985@gmail.com</p>
                <p className="contatText">Sakatoon, SK. Canada</p>
                <br />
                <br />
            </div>
            
            <div class="ContactIcons">
              <div className="iconemail">
                <a href="mailto:noormushtaq1985@gmail.com"  >
                     <img src={envelope} alt="" />
                </a> 
                </div>

                <div className="iconlink">
                  <a href="https://www.linkedin.com/in/noor-al-sabbagh-040172193" >
                        <img src={linkedin} alt="" />
                  </a>
                </div> 
                <div className="icongit">
                  <a href="https://github.com/noormushtaq"  >
                      <img src={github} alt="" />
                  </a>
                  </div>
               
               </div>  
            
           </main>

             
       </div>
    )
}

export default Contact;
