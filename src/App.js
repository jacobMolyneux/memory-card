import React from 'react'
import Card from './Cards/cards.js'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      score: 0,
      highScore: 0,
      memoryCard: [],
      names: ['Test1', 'Test2', 'Test3', 'Test4']
    } 
    
    this.ScoreIncrement = () => {
      this.setState({score: this.state.score + 1});
      console.log('score Increment test');
    }
    this.userMistake = () => {
      this.setState({higherScore: this.state.score})
      this.setState({score: 0})
    }
    this.handleClick = (e) => {
      this.memoryCard.push(Card.state.names);
      console.log('handleClick test')
      this.preventDefault(e);
    }
    this.ChooseName = () => {
      this.setState({names: this.state.names[Math.round(((Math.random())*16)/4)]});
      console.log("chooseName function Test");
  }
   
  }
 
  render(){
  return (
    <div className="App">
      <div id = 'scoreDiv'>
        <h1>Score: {this.state.score}</h1>
        <h1>HighScore: {this.state.highScore}</h1>
      </div>
      <button onClick = {this.ScoreIncrement}>Increment</button>
      <button onClick = {this.userMistake}>Mistake</button>
      <Card onClick = {this.ScoreIncrement} className = "card" id = "1" name = 'Test1' />
      <Card onClick = {this.ScoreIncrement}className = "card" id = "2" name = 'Test2'/>
      <Card onClick = {this.ScoreIncrement}className = "card" id = "3" name = 'Test3'/>
      <Card onClick = {this.ScoreIncrement} className = "card" id = "4" name = 'Test4'/>
    </div>
  );}
}

export default App;
