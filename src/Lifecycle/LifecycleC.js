import React, { Component } from 'react'

class LifecycleC extends Component {

    constructor(props) {        // mounting
      super(props)
    
      this.state = {
         name: 'RRK'
      }
      console.log("LifecycleC constructor");
    }

    static getDerivedStateFromProps(props, state)   {       // mounting
        console.log('LifecycleC getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {           // mounting
        console.log("LifecycleC componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleC shouldComponentUpdate")
        return false
        //  return true
    }
    getSnapshotBeforeUpdate()   {
        console.log("LifecycleC getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate()    {
        console.log("LifecycleC componentDidUpdate")
    }

    changeMyState=()=>{
        this.setState({
            name:'BALAGIRI'
        })
    }

  render() {            // mounting
    console.log("LifecycleC Render")
    return (
      <div>
        {this.state.name}
        <button onClick={this.changeMyState}>Change State</button>
      </div>
    )
  }
}

export default LifecycleC