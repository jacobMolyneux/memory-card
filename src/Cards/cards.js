import React from 'react'
import './cards.css'

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            names: 'hello'
        }
        this.CardClicked = () => {
            console.log("card is clicked");
        }
        
        
    }
    render(){
        return(
            <div onClick = {this.CardClicked} className = 'characterCardDiv'>
                <div className = 'logo'>Logo</div>
                <div className = 'Name'>
                    <h1>{this.state.names}</h1>
                </div>
            </div>
        )
    }
}