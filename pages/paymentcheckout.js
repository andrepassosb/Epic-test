import React from 'react';
import Header,{HeaderProfissional} from '../src/components/commons/Header';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from '../src/components/commons/Button'

export default function Paymentmethod() {

  return (
    <Container className="p-3 ">
      <Header/>
      <HeaderProfissional/>
      <div className=" d-flex flex-md-row flex-column justify-content-start p-0"> 
            <div className="py-2">
            <span style={{ textAlign: 'center', border: '4px solid #c5d8e6', borderRadius: '9px', padding: '3px 1px',background: '#5ed141',}} >
            <img src="/images/ok_white.svg" 
              style={{ width: 25, height: 20, padding: '1px', }} />
              </span>
        <span style={{paddingRight: '30px', paddingLeft: '10px'}} className="h6 text-secondary" >
            Choose a payment method</span>
            </div>
            <div className="py-2">
            <span style={{ textAlign: 'center', border: '4px solid #c5d8e6', borderRadius: '9px', padding: '2px 8px' }} >2</span>
        <span style={{paddingRight: '30px', paddingLeft: '10px'}} className="h6 py-1" >
            Payment details</span>    
            </div>
      </div>
        <div className="py-3" >
            <label htmlFor="card" className="h6">
              Card details
            </label>
            <div id="card" className=" d-flex flex-md-row flex-column p-0" style={{ textAlign: 'center', border: '2px solid #c5d8e6', borderRadius: '10px', padding: '2px 8px' }}>
            <input type="tel" maxlength="19" name="number" className="border-0" placeholder="Card Number"/>
            <input type="number" name="venc" className="border-0 border-end-0" placeholder="MM / YY"/>
            <input type="number" name="cvv" className="border-0" placeholder="CVC"/>
            </div>
        </div>
        <div className=" d-flex flex-md-row  flex-column  p-0">
            <div >
                  <label htmlFor="fullname" className="h6" >Full name</label>
                  <div style={{ textAlign: 'center', border: '2px solid #c5d8e6', borderRadius: '10px', padding: '2px 8px' }}>
                    <input type="text" className="border-0" name="fullname" id="fullname" placeholder="Full Name" />
                   </div>
              </div>
            <div>
              <label htmlFor="email" className="h6" >Email</label>
                <div style={{ textAlign: 'center', border: '2px solid #c5d8e6', borderRadius: '10px', padding: '2px 8px' }}>
                  <input type="text" className="border-0" name="email" id="email" placeholder="email@email.com" />
                </div>
            </div>
        </div>
        <div  class="d-flex justify-content-end" style={{width: '200x', height: '200px'}} >
            <a  href="/paymentstatus">
              <Button style={{padding: '25px 60px'}}>Pay $24</Button></a>
        </div>
    </ Container>
  );
}
