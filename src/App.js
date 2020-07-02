import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'
import Home from './Home.js';
import Header from './Header.js';
import About from './About.js';
import Profile from './Profile.js';
import Skill from './Skill.js';
import Experience from './Experience.js';
import Work from './Work.js';
import Contactus from './Contactus.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {

  return (
  			 <Router>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
{/*    <Header/>
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/profile" component={Profile} />
      <Route  path="/skill" component={Skill} />
      <Route  path="/experience" component={Experience} />
      <Route  path="/work" component={Work} />
      */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" ml-auto about-container">
      <Nav.Link href="/">HOME</Nav.Link>
       <Nav.Link href="/about" component={About}>ABOUT</Nav.Link>
       <Nav.Link href="/work" component={Work}>WORK</Nav.Link>
       <Nav.Link href="/Contactus" component={Contactus}>CONTACT US</Nav.Link>
    </Nav>
  </Navbar.Collapse>
   </Navbar>
    <Switch>
             <Route exact path="/" component={Home} />
             <Route  path="/about" component={About} />
             <Route  path="/profile" component={Profile} />
             <Route  path="/skill" component={Skill} />
             <Route  path="/experience" component={Experience} />
             <Route  path="/work" component={Work} />
             <Route  path="/contact" component={Contactus} />
             
    </Switch>
       <div class="footer mt-10">Copyright React js 2020 by Phyu</div>
   </Router>
  	)
  }
}
export default App;