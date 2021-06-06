import React from 'react'
import Card from './Cards/cards.js'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    

    this.state = {
      score: 0,
      highScore: 0,
      
    } 
    
   
  }
 
  render(){
  return (
    <div className="App">
      <div id = 'scoreDiv'>
        <h1>Score: {this.state.score}</h1>
        <h1>HighScore: {this.state.highScore}</h1>
      </div>
      <Card className = "card" id = "1" onClick = {this.ScoreIncrement}/>
      <Card className = "card" id = "2"/>
      <Card className = "card" id = "3"/>
      <Card className = "card" id = "4"/>
    </div>
  );}
}

export default App;
