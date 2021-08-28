import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import About from './About';
import Contacts from './Contacts';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        "lesson": "14hw"
      }
    }
//main, about, contacts, 404.
menu={ main: 'Main', about: 'About', contacts: 'Contacts', '404' : 404};
    render (){
      return (
        
        <Router>
          <Header/>
          <div className="App">
              <ul>
                <li><a href="/">main</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/contacts">contacts</a></li>
                <li><a href="/404">404</a></li>                                                        
            </ul>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />            
            <Route exact path="/404" component={NotFound} />                        
          </div>
          <Footer/>
        </Router>
      );
    }
}
export default App;
