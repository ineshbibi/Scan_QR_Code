import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import QrReader from 'react-qr-reader'
import { Button } from 'reactstrap';
import Home from './Components/home';
import Scan from './Components/scan';
import {Route,Switch} from 'react-router-dom'
var QRCode = require('qrcode.react');


class  App extends Component {
 

 
  render(){
   
  return (
  

    <div className="App" >
    
     <header className="App-header">
     
    <Switch>
     <Route exact path="/" component= {Home}/>
     <Route exact path="/scan" component= {Scan}/>
    </Switch>
      </header>   

      
      
        
    </div>
  );
}}

export default App;
