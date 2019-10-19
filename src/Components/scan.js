import React, { Component , Fragment} from 'react';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../App.css';
import axios from 'axios';
import QrReader from 'react-qr-reader';
import Moment from 'react-moment'



class  scan extends Component {

  state = {
    onClick: false,
    productId: "",
    result: 'No result',
    description: 'null',
    location:'null',
    quantity:'null',
    price: 'null',
    harvestDate:'',
    NameProduct:'',
    photo:'',
    requestStatus:'null',
    productStatuts:'null',
    trace: [],
    categorie:'',
    idCo:'1',
    userId:'00',
    exists:'',
    traceModel: false,
    owner:'',
    product:'',
  
 
}
  handleScan = data => {
    if (data) {
      console.log("captured")
     axios.get("http://localhost:3000/api/org.app.network.Product/"+data).then(res=>{
      
        this.setState({
        result : data,
        description: res.data.description,
        location:res.data.location,
        quantity:res.data.quantity,
        price: res.data.price,
        requestStatus:res.data.requestStatus,
        productStatuts:res.data.productStatuts,
        harvestDate:res.data.harvestDate,
        NameProduct:res.data.NameProduct,
        photo: res.data.photo,
        categorie: res.data.categorie,
        trace : res.data.trace,
        userId : res.data.owner.split('#')
      }) 
      console.log(this.state.userId[1])
    
    }
      ).then( 
        axios.get("http://localhost:3000/api/org.app.network.Producer/"+ this.state.userId[1]).
      then(res=>{
        this.setState({
          owner:res.data,
          traceModel: true,
        })
      }))


     
  
     
    }
  }
 
  cancel(){
    this.setState({
      traceModel: false,
    })
  }

  render(){
  
  
    
  return (
    
<Fragment>

<QrReader
 delay={5}
onScan={this.handleScan}
style={{ width: '100%' }}/>


       
       
        <Modal isOpen={this.state.traceModel} className="mondal" >
        <ModalHeader><div className="modelHeader"><p className="ownerInfo">{this.state.owner.firstName} {this.state.owner.lastName} </p>
        <span className="Producer"> Producer</span></div></ModalHeader>
        <ModalBody>
          <div className="modalBody">
               <div className="image">
                  <div className="infos">
                    <p className="Name">{this.state.NameProduct}</p>
                    <div className="partie2"><span className="Adresse1">{this.state.location.country}</span>
                      <span className="categorie">{this.state.categorie}</span>
                    </div>
                  </div>
                    <div className="logo">
                      <img className="produit-photo" src={this.state.photo}   /> 
                    </div>
                </div>
                        <tr className="hh"><td>Origin : </td> <td>{this.state.location.country}</td></tr>
                        <tr className="hh"><td>description : </td> <td>{this.state.description}</td></tr>
                        <tr className="hh"><td>Quantity : </td> <td>{this.state.quantity}</td></tr>
                        <tr className="hh"><td>Price : </td> <td>{this.state.price}</td></tr>
                        <tr className="hh"><td>Harvest date : </td> <td><Moment format="YYYY-MM-DD">{this.state.harvestDate}</Moment></td></tr>
       
              </div>
      
        </ModalBody>

        <ModalFooter>
        <button className="scanAgain" onClick={this.cancel.bind(this)}>Scan Again</button>
        </ModalFooter>
      </Modal>
      
 </Fragment> 
  );
}}

export default scan;
