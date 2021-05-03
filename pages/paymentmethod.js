import React from 'react';
import Header ,{HeaderProfissional} from '../src/components/commons/Header';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {ButtonPaymentMethod} from '../src/components/commons/Button'



export default function Paymentmethod() {
  return (
    <Container className="p-3 ">
      <Header/>
      <HeaderProfissional/>
      <div className=" d-flex flex-md-row flex-column justify-content-start p-0"> 
            <div className="py-2">
            <span style={{ textAlign: 'center', border: '4px solid #c5d8e6', borderRadius: '9px', padding: '2px 8px',background: '#4565dd', color:'white' }} >1</span>
        <span style={{paddingRight: '30px', paddingLeft: '10px'}} className="h6 py-1" >
            Choose a payment method</span>
            </div>
            <div className="py-2">
            <span style={{ textAlign: 'center', border: '4px solid #c5d8e6', borderRadius: '9px', padding: '2px 8px' }} >2</span>
        <span style={{paddingRight: '30px', paddingLeft: '10px'}} className="h6 py-1" >
            Payment details</span>    
            </div>
      </div>
      <div className=" d-flex flex-column justify-content-between py-3" >
        <div className="d-flex flex-md-row flex-column justify-content-between justify-content-md-around ">
        <a className="py-2"href="/paymentcheckout"><ButtonPaymentMethod image="/images/card.svg" text="Credit card"/></a>
        <a className="py-2" href="#"><ButtonPaymentMethod image="/images/bank.svg" text="Internet banking"/></a>
        </div>
        <div className=" d-flex flex-md-row flex-column justify-content-between justify-content-md-around ">
        <a className="py-2" href="#"><ButtonPaymentMethod image="/images/paypal.svg" text="Paypal"/></a>
        <a className="py-2" href="#"><ButtonPaymentMethod image="/images/bitcoin.svg" text="Bitcoin wallet"/></a>
        </div>
      </div>
    </ Container>
  );
}
