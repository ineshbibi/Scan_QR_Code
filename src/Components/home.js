import React, { Component , Fragment} from 'react';
import { Button } from 'reactstrap';
import {Redirect} from 'react-router-dom'
import '../App.css';
import axios from 'axios';
var QRCode = require('qrcode.react');


class  home extends Component {
  state = {
      onClick: false,
      
     
    
   
  }

  Scanner(){
    this.setState({
      onClick: true
    })
  }



  render(){
    if (this.state.onClick){
      return <Redirect to='/scan' />
    }
  return (
<Fragment>
   
      <Button className="Button-scan" onClick={this.Scanner.bind(this)}></Button> 
 </Fragment> 
  );
}}

export default home;
