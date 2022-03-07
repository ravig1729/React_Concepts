import React, { Component } from 'react'


class ClassClick extends Component {

  clickHandler() {
    console.log("clicked from class compo.");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click from class</button>
      </div>
    )
  }
}

export default ClassClick


//Props : this.props
//State : this.state.statename
//function :this.functionName