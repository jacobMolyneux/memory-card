import React from 'react'
import './cards.css'

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            names: ['test1', 'test2', 'test3', 'test4']
        }
        this.CardClicked = () => {
            console.log("card is clicked");
        }
        this.ChooseName = () => {
            this.setState({names: this.state.names[Math.round(((Math.random())*16)/4)]});
            console.log('clicked');
        }
    }
    render(){
        return(
            <div className = 'characterCardDiv'>
                <div className = 'logo'>Logo</div>
                <div className = 'Name'>
                    <h1>{this.state.names[Math.round(((Math.random())*12)/4)]}</h1>
                </div>
            </div>
        )
    }
}