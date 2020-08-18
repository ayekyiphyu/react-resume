import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import aboutimg from './images/test.png';
import { Col, Row, Button, Container, Card} from 'react-bootstrap';

function shoot(){
  alert('thanks');
}
 export default class About extends Component {
 colorBackground() {
  document.body.style.backgroundColor = "black";
  document.body.style.color="white"
  }
clearBackground() {
   document.body.style.backgroundColor = "white"
   document.body.style.color="black"
}

  render() {
    return (
      //change bg
     <div>
        
       <view class="change-bg  bottom" >

        <a href="#" onClick={() => this.colorBackground()}>Change Bg</a>
        {' | '}
        <a href="#" onClick={() => this.clearBackground()}>Clear</a>
     </view>
        
     <Container className="mt-10">
       <Row md={12}>
         <Col xs={2}>2 of 3</Col>
         <Col xs={9}>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/image-01.jpg"  alt="{aboutimg}"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <button onClick={shoot}>Take the shot!</button>
         </Col>
       </Row>
     </Container>
    </div>
   );
  }
} 



