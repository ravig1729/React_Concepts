import React, { Component } from 'react'

class GetDerived extends Component {
    
    constructor(props){
        super(props);
        this.state={
            // name:"Raj"
            stateName:this.props.name
        }
        console.log("child constructor")
    }
    static getDerivedStateFromProps(props,state){
        return {name:props.name}
    }
  render() {
    console.log("render child")
    return (
      <div>This is a {this.state.name}</div>
    )
  }
}

export default GetDerived