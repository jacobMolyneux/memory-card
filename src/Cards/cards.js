import React from 'react'
import './cards.css'

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
       
        this.ComponentDidMount = () => {
           console.log('Component did Mount')
        }

    }
    render(){
        return(
            <div className = 'characterCardDiv'>
                <div className = 'logo'>Logo</div>
                    <div className = 'Name'>
                     <h1 id = 'nameField'>{this.props.name}</h1>
                    </div>
            </div>
        )
    }
}