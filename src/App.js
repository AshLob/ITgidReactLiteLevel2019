import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        squares: Array(9).fill(null),
        count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
  isWinner = () =>{
    //элемент по которому кликнули:
    let s = (this.state.count % 2 === 0) ? 'X': 'O';
    for(let i = 0; i<8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s
       && this.state.squares[line[1]] === s
       && this.state.squares[line[2]] === s) {
         alert(s + ' win');
         setTimeout(()=>{
          this.setState({ squares: Array(9).fill(null) }); 
          this.setState({count: 0});
          }, 3000)
       }
    }
  }
  clickHandler = e =>{
    //data - номер квадрата по которому кликнули
    let data = e.target.getAttribute('data');
    //console.log(data);
    let currentSquare = this.state.squares;
    console.log(currentSquare);
    if (currentSquare[data] === null) {
      currentSquare[data]=(this.state.count % 2 === 0) ? 'X': 'O';
      this.setState({count: this.state.count + 1});
      this.setState({squares: currentSquare });
    }
    else {
      alert('Так нельзя!!!');
    }
    this.isWinner();
  }
  render() {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">
        {this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">
        {this.state.squares[1]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">
        {this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">
        {this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">
        {this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">
        {this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">
        {this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">
        {this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">
        {this.state.squares[8]}</div>

        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
