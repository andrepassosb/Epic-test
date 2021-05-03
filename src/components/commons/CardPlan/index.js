import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import {Button} from '../Button'
import styled from 'styled-components';

const CardImg = styled.img`
border: 5px solid #c5d8e6; 
border-radius: 10px;
width: 75px; 
height: 75px; 
paddingTop: 8px;
background: white;
`

const CardDefault= {width: '315px', height: '480px', borderRadius: '25px', border: '5px solid #c5d8e6',}
const CardBlue = {width: '315px', height: '480px', borderRadius: '25px', color: 'white', backgroundImage: 'linear-gradient(45deg, #4565dd, #5bbff4)'}

export default function CardPlan({image, planName, cost, cloudStorage, activeProjects, teamMember, link, variant, ghost}) {
  function VariantStyle(variant){
    if (variant == "blue") {
      return CardBlue;
    }
    return CardDefault;
  }

  return (
        <Card className="mb-4"
        style={VariantStyle(variant)}>
          <div         
            className="
              d-flex 
              flex-row 
              justify-content-start 
              align-items-top
              px-4 pt-3"
              >
          <CardImg 
               src={image} alt="plan image" />
            <div  
              className="align-items-end pt-2 px-4">
              <h5 className="m-0" >{planName}</h5>
                <div className="d-flex flex-row align-items-end" >
                  <p className="mb-4 p-1 " style={{ opacity: 0.7}}>€</p>
                  <h1 >{cost}</h1>
                  <p style={{ opacity: 0.7}}>/mounth</p></div>
                </div>
          </div>    
          <CardBody >
            <CardTitle tag="h6" className="py-3">Features included are,</CardTitle>
            <div
              className="
              d-flex 
              flex-row 
              align-items-center
              py-2"
            >
            <img src="/images/ok.svg" 
              style={{ width: 30, height: 30, border: '4px solid #c5d8e6', borderRadius: '5px', padding: '2px', background: 'white' }} />
            <CardSubtitle tag="h6" style={{paddingLeft: '20px', paddingRight:'8px'}} className="mt-1 ">{cloudStorage}</CardSubtitle>
            <CardSubtitle tag="h6" className="mt-1" style={{ opacity: 0.7}}>Cloud storage</CardSubtitle>
            </div>
            <div
              className="
              d-flex 
              flex-row 
              align-items-center
              py-2"
            >
            <img src="/images/ok.svg" 
              style={{ width: 30, height: 30, border: '4px solid #c5d8e6', borderRadius: '5px', padding: '2px', background: 'white' }} />
            <CardSubtitle tag="h6" style={{paddingLeft: '20px', paddingRight:'8px'}} className="mt-1 ">{activeProjects}</CardSubtitle>
            <CardSubtitle tag="h6" className="mt-1" style={{ opacity: 0.7}}>Active projects</CardSubtitle>
            </div>
            <div
              className="
              d-flex 
              flex-row 
              align-items-center
              py-2"
            >
            <img src="/images/ok.svg" 
              style={{ width: 30, height: 30, border: '4px solid #c5d8e6', borderRadius: '5px', padding: '2px', background: 'white', }} />
            <CardSubtitle tag="h6" style={{paddingLeft: '20px', paddingRight:'8px'}}className="mt-1">{teamMember}</CardSubtitle>
            <CardSubtitle tag="h6" className="mt-1" style={{ opacity: 0.7}}>Team member</CardSubtitle>
            </div>
            <div style={{ paddingTop: '50px', width: '100%', height: '100%'}}>
            <a href={link}><Button ghost={ghost} >{planName}&nbsp;&nbsp;&gt;</Button></a>
            </div>
          </CardBody>
        </Card>
  );
};

