import React, { Component } from 'react'

export class Construct extends Component {
    constructor(){
        super();
        this.state ={
            name:"Ravi"
        }
        this.handleClick =this.handleClick.bind(this);
    }

    handleClick(){
      console.log("heyy",this);
    }
    
  render() {
    return (
      <div>Construct {this.state.name}<button onClick={this.handleClick}>Click</button></div>
    )
  }
}

export default Construct