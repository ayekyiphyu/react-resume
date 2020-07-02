import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      
     <ul>
        <li> <Link to="/">Home</Link></li>
		    <li><Link to="/about">About</Link></li>
		    <li><Link to="/profile">profile</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/experience">Experience</Link></li>
         <li><Link to="/footer">Footer</Link></li>
        
     </ul>
   );

  }
}
