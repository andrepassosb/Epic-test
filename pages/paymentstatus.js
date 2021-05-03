import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loadingbar from '../src/components/patterns/animations/loadingbar.json';
import success from '../src/components/patterns/animations/success.json';
import { Lottie } from '@crello/react-lottie';

const screenStates = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
  };
  
export default function Paymentmethod() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);

    setTimeout(() => {setScreenState(screenStates.SUCCESS)}, 1500);

  return (
    <Container className="p-3 ">

    {screenState === screenStates.LOADING && (
      <Jumbotron 
          className="bg-white d-flex flex-column justify-content-center align-items-center"
          >
          <h2 className="header">Please wait</h2>
          <p className="text-secondary">We are recieving the amount</p>
            <Lottie
              width="600px"
              height="200px"
              speed = "1"
              config={{ animationData: loadingbar, loop: false, autoplay: true,}}
            />
          
      </Jumbotron>
    )}

    {screenState === screenStates.SUCCESS && (
      <Jumbotron 
          className="bg-white d-flex flex-column justify-content-center align-items-center"
          >
            <Lottie
              width="200px"
              height="200px"
              speed = "1"
              config={{ animationData: success, loop: false, autoplay: true,}}
            />
          <h2 className="header">Please wait</h2>
          <p className="text-secondary">We are recieving the amount</p>
          <a class="btn btn-primary" href="/" role="button">Explore App</a>
      </Jumbotron>
    )}

    </ Container>
  );
}
