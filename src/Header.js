import './Header.css';
//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        "lesson": "14hw"
      }
    }

    render (){
      return (
        <div className="App">
          <h2>ДЗ к Уроку 14</h2>
        </div>
  
      );
    }
}
export default Header;