import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Card, CardImg, CardBody,Container,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Header from '../src/components/commons/Header';
import CardPlan from '../src/components/commons/CardPlan';
import Footer from '../src/components/commons/Footer';

export default function Planos() {
  return (
  <Container>
    <Header/>
    <div  
        className="
          d-flex 
          flex-md-row 
          flex-column 
          justify-content-around 
          align-items-center
          pt-3
          "
          >
          <CardPlan
            image="/images/boy.svg"
            planName="Starter"
            cost="0"
            cloudStorage="1 TB"
            activeProjects="2"
            teamMember="3"
          />
          <CardPlan
            image="/images/man.svg"
            planName="Professional"
            cost="24"
            cloudStorage="Unlimited"
            activeProjects="50"
            teamMember="88"
            link="/paymentmethod"
            variant="blue"
            ghost
          />
    </div>      
    <Footer/>
  </Container>
)
  };