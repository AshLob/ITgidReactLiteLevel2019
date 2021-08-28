import './Footer.css';
//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';


class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        "lesson": "14hw"
      }
    }

    render (){
      return (
        <div className="App">
          <h2>Курс ITgidInfo</h2>
        </div>
  
      );
    }
}
export default Footer;