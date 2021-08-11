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
        <h3>Случайное число от 50 до 60: </h3>
        <div>{Math.round(10*Math.random()+50)}</div>
        <div style={{backgroundColor: '#3366CC'}}>Тест </div>

      </div>
    )
  }
}

export default App;
