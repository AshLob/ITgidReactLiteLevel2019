import './App.css';
//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        "lesson": "14hw"
      }
    }

    render (){
      return (
        <div className="App">
          <h1>404</h1>
        </div>
  
      );
    }
}
export default NotFound;
