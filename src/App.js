import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      "go": "goooo"
    }
  }

  test() {
    return 111;
  }

  render (){   
    let a= 44;
    let b= {name:'Vova', lastName:'Ash'} ; 
    let vvv= ['Иванов', 'Иван', 'Аркадьевич', 'привет'];
    return  (

      <div>
        <div className="App">
          <h1>{this.state.go}</h1>
          <h2>{3+7}</h2>
        </div>
        <div>{Math.random()}</div>
        <div>{this.test()}</div>
        <div>{a}</div>      
        <input defaultValue="222"/>
        <div>&#8364;</div>
        <hr />
        <div>{true}</div>
        <hr />
        {/* <div>{...b}</div> */}
        <ul>
          {vvv.map(elem => {
            return <li key={elem}>{elem}</li>
          } )}
        </ul>
      </div>
    )
  }
}

export default App;
