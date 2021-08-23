import React from 'react';
import './App.css';
//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "lesson": "Lesson 14"
    }
  } 
  render(){
    return (
      <div className="App">
        <h1>About</h1>
       {/*<ul>
          <li><a href="/">Main page</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contacts">Contacts</a></li>                    
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
       </Switch>*/}

      </div>
    );
    }
}

export default About;