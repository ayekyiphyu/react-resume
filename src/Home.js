import React, { Component } from 'react';

import { Col,Container,Row} from 'react-bootstrap';
import ReactDOM from 'react-dom';
 import {
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Bg from './images/banner.png';
import './style.css';
import { ArrowRight } from 'react-bootstrap-icons';

class Header extends React.Component {
  render() {
    return (
      //Banner Image
      
     <section>
       <img src={Bg} class="bnr-img"/>
         <div class="workflow mt-10">
          <Container>
             <Row>
                <Col md={6} style={{backgroundColor: " #FFF3DC", padding: "20px"}}><h1>Workflow</h1>
                <h5>Main work is FrontEnd and UI/UX</h5>
                <a href="./work" class="linked">
                     <p class="mt-15 text-right">More Details  <ArrowRight color="royalblue" size={30} /></p>
                </a>
                </Col>
                <Col md={6} style={{backgroundColor: " #FFF3DC", padding: "20px"}}>
                  <div class="flex-container">
                    <div>
                       <Row>
                       <Col md={2}><p class="circle">1</p></Col>
                       <Col md={9}>Planning and Advise</Col>
                       </Row>
                    </div>

                    <div>
                       <Row>
                       <Col md={2}><p class="circle">2</p></Col>
                       <Col md={9}>Content</Col>
                       </Row>
                    </div>

                    <div>
                       <Row>
                       <Col md={2}><p class="circle">3</p></Col>
                       <Col md={9}>Conception</Col>
                       </Row>
                    </div>

                    <div>
                       <Row>
                       <Col md={2}><p class="circle">4</p></Col>
                       <Col md={9}>Design & Development</Col>
                       </Row>
                    </div>

                     <div>
                       <Row>
                       <Col md={2}><p class="circle">4</p></Col>
                       <Col md={9}>Handover & launch</Col>
                       </Row>
                    </div>

                  </div>
                </Col>
             </Row>
          </Container>
        </div>
     </section>
   );
  }
}
export default Header;



