import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components'

const CardImg = styled.img`
border: 5px solid #c5d8e6; 
border-radius: 10px;
width: 75px; 
height: 75px; 
paddingTop: 8px;
background: white;
`

const ChangePlan = styled.div`
border: 2px solid;
padding: 10px 20px;
border-radius: 15px;
font-size: medium;
`

export default function Header(){
    return(
    <Jumbotron 
        className="
        bg-white 
        d-flex 
        flex-column 
        justify-content-center 
        align-items-center
        pt-4
        pb-0
        m-0"
        >
        <h2 className="header">Get started today</h2>
        <p className="text-secondary">Choose the right plan and start creating projects</p>
    </Jumbotron>
    );
};

export function HeaderProfissional(){
    return(
        <Jumbotron
        style={{backgroundImage: 'linear-gradient(90deg, #4565dd, #5bbff4)',
          color: 'white', borderRadius: '20px'}}
        className="
          d-flex 
          flex-md-row 
          flex-column
          align-items-center
          justify-content-between 
          py-4 px-5">
        <div className="align-items-end d-flex flex-row">
        <CardImg src="/images/man.svg" alt="plan image" />
          <div className="align-items-end px-4">
            <h5 className="m-0" >Professional</h5>
              <div className="d-flex flex-row align-items-end" >
                <p className="mb-4 p-1 " style={{ opacity: 0.7}}>€</p>
                <h1 >24</h1>
                <p style={{ opacity: 0.7}}>/mounth</p></div>
              </div>
              </div>
      <ChangePlan>Change plan</ChangePlan>
    </Jumbotron>
    );
};
