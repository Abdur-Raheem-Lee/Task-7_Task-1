
import React, {Component} from 'react';
import './App.css';
import Logo from './Logo.jpg';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Service1 from './Components/Service_1';
import Service2 from './Components/Service_2';
import Service3 from './Components/Service_3';

class LoginApp extends Component{
  render(){
    return(
      <div>
        {/* Displaying the information within the Header Component */}
        <div id="Header app">
          <img src={Logo} alt="The Logo will display soon..." id="Logo"/>
          <Header/>
        </div><br/>  
        {/* Displaying the information within the Landing Component */}
        <div id="Landing">
          <Landing/>
        </div><br/>
        {/* Displaying the Services from its respective Components */}
        <div id="Products">
          <h2>Services</h2>
          <p>LnR Transport and Logistics offers a wide variety of services for clients who require any type of transport.<br/>
          They specialise in private transport such as:</p>
          <Service1/>
          <Service2/>
          <Service3/>
        </div>    
      </div>
    );
  }
}

export default LoginApp;
