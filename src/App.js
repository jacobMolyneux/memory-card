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
      names: ["test1", "test2", "test3", "test4", "test5", "test6", "test6"],
      name1: '',
      name2: '',
      name3: '',
      name4: '',
    } 
    
    this.userMistake = () => {
      this.setState({highScore: this.state.score})
      this.setState({score: 0})
      this.generateNameFromArray()
    }
    this.handleClick = (e) => {
      this.memoryCard.push(Card.state.names);
      console.log('handleClick test')
      this.preventDefault(e);
    }
    
   this.componentDidMount = () => {
    this.generateNameFromArray()
   }
   this.generateNameFromArray = () =>{
    this.setState({name1: this.state.names[Math.round(((Math.random())*16)/4)]})
    this.setState({name2: this.state.names[Math.round(((Math.random())*16)/4)]})
    this.setState({name3: this.state.names[Math.round(((Math.random())*16)/4)]})
    this.setState({name4: this.state.names[Math.round(((Math.random())*16)/4)]})
   }
   this.ScoreIncrement = () => {
    this.setState({score: this.state.score + 1});
    console.log('score Increment test');
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
      <Card onClick = {this.ScoreIncrement} className = "card" name = {this.state.name1} />
      <Card onClick = {this.ScoreIncrement} className = "card" name = {this.state.name2}/>
      <Card onClick = {this.ScoreIncrement} className = "card" name = {this.state.name3}/>
      <Card onClick = {this.ScoreIncrement} className = "card" name = {this.state.name4}/>
    </div>
  );}
}

export default App;
