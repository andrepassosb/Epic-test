import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Footer(){
    return(
        <Jumbotron 
        className="bg-white d-flex flex-column justify-content-center align-items-center pt-4 pb-0 m-0"
        >
          <p className="text-secondary">Do you need more information on plans?</p>
          <a class="font-weight-bold" href="#">Contact us</a>
        </Jumbotron>
    );
};