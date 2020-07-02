import React, {Component} from 'react';
import './style.css';
export default class FirstComponent extends Component {

constructor(props) {
    super(props)
    }

render() {
   const element = (<div className="small">Beginner React Js</div>)
    return (<div className="menu">
        <div className="title">
        {this.props.displaytext}
        </div>
        {element}
    </div>)
    }
}