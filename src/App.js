import React from 'react';

import {
  BrowserRouter,
  Route,
  Link
}from 'react-router-dom';



import './App.css';
import Index from './pages/Index';
import Contact from './pages/Contact';
import About from './pages/About';
import BMIcalculator from './pages/BMIcalculator';


import Head from './pages/childpages/Head';
import Chest from './pages/childpages/Chest';
import Ears from './pages/childpages/Ears';
import Eyes from './pages/childpages/Eyes';
import Abdomen from './pages/childpages/Abdomen';
import Other from './pages/childpages/Other';


import WomenheadN from './pages/womenpages/WomenheadN';
import WomenChest from './pages/womenpages/WomenChest';
import WomenEars from './pages/womenpages/WomenEars';
import WomenEyes from './pages/womenpages/WomenEyes';
import WomenAbdomen from './pages/womenpages/WomenAbdomen';
import Arms from './pages/womenpages/Arms';
import WomenLegs from './pages/womenpages/WomenLegs';
import WomenOther from './pages/womenpages/WomenOther';

import Manhead from './pages/manpages/Manhead';
import Manchest from './pages/manpages/Manchest';
import ManEars from './pages/manpages/ManEars';
import Maneys from './pages/manpages/Maneys';
import Manabdomen from './pages/manpages/Manabdomen';
import Manarms from './pages/manpages/Manarms';
import Manlegs from './pages/manpages/Manlegs';
import Manother from './pages/manpages/Manother';

import Child from './pages/Child';
import Woman from './pages/Woman';
import Man from './pages/Man';

import logo from './logo.jpg';




function App() {
   
  return (
    <BrowserRouter basename={'/comit-final-project/'}>
    <div>
    <header className="banner">
      <div className="logo" >
        <img src={logo} alt="" />
        <h3 className="title">Online Doctor</h3>
      </div>
      <nav >
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Me</Link></li>
      </ul>

    </nav>
    </header>
    

      <Route path="/" component={Index} exact={true}/>
      <Route path="/contact" component={Contact} exact={true}/>
      <Route path="/about" component={About} exact={true}/>
      
        <Route path="/man" component={Man} exact={true}/>
        <Route path="/woman" component={Woman} exact={true}/>
        <Route path="/child" component={Child} exact={true}/>

        <Route path="/bmicalculator" component={BMIcalculator} exact={true}/>
     
        <Route path="/child/eyes" component={Eyes} exact={true}/>
        <Route path="/child/ears" component={Ears} exact={true}/>
        <Route path="/child/head" component={Head} exact={true}/>
        <Route path="/child/abdomen" component={Abdomen} exact={true}/>
        <Route path="/child/chest" component={Chest} exact={true}/>
        <Route path="/child/other" component={Other} exact={true}/>

        <Route path="/woman/womeneyes" component={ WomenEyes} exact={true}/>
        <Route path="/woman/womenears" component={WomenEars} exact={true}/>
        <Route path="/woman/womenheadn" component={ WomenheadN} exact={true}/>
        <Route path="/woman/womenabdomen" component={WomenAbdomen} exact={true}/>
        <Route path="/woman/womenchest" component={ WomenChest} exact={true}/>
        <Route path="/woman/arms" component={Arms} exact={true}/>
        <Route path="/woman/womenlegs" component={WomenLegs} exact={true}/>
        <Route path="/woman/womenother" component={WomenOther} exact={true}/>

        <Route path="/man/maneys" component={ Maneys} exact={true}/>
        <Route path="/man/manears" component={ManEars} exact={true}/>
        <Route path="/man/manhead" component={ Manhead} exact={true}/>
        <Route path="/man/manabdomen" component={Manabdomen} exact={true}/>
        <Route path="/man/manchest" component={ Manchest} exact={true}/>
        <Route path="/man/manarms" component={Manarms} exact={true}/>
        <Route path="/man/manlegs" component={Manlegs} exact={true}/>
        <Route path="/man/manother" component={Manother} exact={true}/>
 
      <footer id="copyright">
        <p>Copyright © Noor Al-Sabbagh</p>
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App;
