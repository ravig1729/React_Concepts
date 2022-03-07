import React, { Component } from 'react'

class EventBinding extends Component {

    state = {
        message : 'Welcome user:-)'
    }

    clickHandler(){
    
       console.log('this');
      this.setState({message : 'GoodBye user:-)Thaks for Visit,Visit Again!!'})    //setState is used to change the message in the state.this is used for current component.
    }

  render() {
      console.log("render");  // its re-rendered the component.
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick = {this.clickHandler.bind(this)}>Click </button>
          <button onClick = { () => this.clickHandler()}>Click </button>     
          <button onClick = {this.clickHandler}>Click Here</button>
      </div>
    )
  }
}

export default EventBinding

//Storage:
//Binding in render Method----- this.clickHandler.bind(this)
//Arrow function in render method ------- () => this.clickHandler()
//Arrow function in your method --------this.clickHandler()