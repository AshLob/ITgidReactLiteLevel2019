import React from 'react';
import './App.css';
//Задания из Урока 12 и 13.

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      "go": "Lesson 13 ",
      "cvet": "#ccccc"
    }
  }

  test() {
    return 111;
  }
  four() {
    let str='';
    for (let j = 1; j < 101; j++) {
      str += j + ", ";
    }
    return str;
  }  
  render (){   
    let a= 44;
    let b= {name:'Vova', lastName:'Ash'} ; 
    let vvv= ['Иванов', 'Иван', 'Аркадьевич', 'привет'];
    //let rr=10, g16 =0, b16=0, r10=10, r16=0, hexColor=''; // для полноцвета
    let colors = ["Black", "Gray", "Silver", "White",
    "Fuchsia", "Purple", "Red", "Maroon",
    "Yellow", "Olive", "Lime", "Green",
    "Aqua", "Teal", "Blue", "Navy"];
    let randomColorNumber=(Math.round(15*Math.random()));    
    let randomColor=colors[randomColorNumber];
    let paraNum = [1, 2, 3, 4, 5];
    let taskFour=[1,0,1,0];
    let str;
    /*
    Вариант случайного цвета с полным диапозоном. Не удался из-за того что неподставаляется переменная
    в стили
    r10 = Math.round(255*Math.random());
    r16 = r10.toString(16);
    g16=(Math.round(255*Math.random())).toString(16);
    b16=(Math.round(255*Math.random())).toString(16);
    
    // hexColor="'#"+r16+g16+b16+"'";
    hexColor="#"+r16+g16+b16;
    let ccc=`{{backgroundColor: '` + hexColor+ `'}}`;
    console.log(ccc);
    */
    
    console.log("Количество цветов в массиве: " + colors.length);
    console.log("Случайный цвет: №"+randomColorNumber+" - "+randomColor);

        return  (
      
      <div>
        <div className="App">
          <h1>{this.state.go}</h1>
          <h2>{3+7}</h2>
        </div>
        <h3>Случайное число от 50 до 60: </h3>
        <div>{Math.round(10*Math.random()+50)}</div>
        <h2>Task 2</h2>
        {/* Для полноцвета - не получилось.
        <div>Код для случайного цвета: {hexColor}</div>
        <div>Зеленый хекс: {g16}</div>
        <div style={{backgroundColor: {hexColor}}}>! Не задается цвет дива. </div>
        {/* <div style={ccc}>! Не задается цвет дива. </div>        
        <div style={{backgroundColor: this.state.cvet}}>! Не задается цвет дива. </div>         */}
        <div style={{backgroundColor:'#cccccc'}}>Серая бэкграунд </div>  
        <div style={{backgroundColor:[randomColor]}}>Случайный бэкграунд </div>
        <h2>Task 3</h2>        
        {paraNum.map((elem,index) => {
          return <p key={index} >{elem}</p>
        })
        }
        <h2>Task 4</h2>        
        {taskFour.map((elem) => {
          if (elem==1) {str='white'} else (str='black');
          return <div className={str}>{elem}</div>
        })        
        }
        <h2>Task 5</h2>        
         <div> {this.four()}           
        </div>

      </div>
    )
  }
}

export default App;
