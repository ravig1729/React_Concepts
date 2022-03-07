import React, { Component } from 'react'

class GetSnapBefore extends Component {

    constructor(props) {        // mounting
      super(props)
    
      this.state = {
         name: 'constructor'
      }
    }

    componentDidMount() {           // mounting
        setTimeout(()=>{
            this.setState( { name:"ComponentDidMount Method" })
        },5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState)   {
        document.getElementById('previous-state').innerHTML = prevState.name
    }
    componentDidUpdate()    {
        document.getElementById('current-state').innerHTML = this.state.name
    }
   

  render() {            // mounting
    return (
      <div>
        <h5>This is a {this.state.name}</h5>
        <p id='current-state'></p>
        <p id='previous-state'></p>
      </div>
    )
  }
}

export default GetSnapBefore