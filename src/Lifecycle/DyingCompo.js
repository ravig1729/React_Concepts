import React, { Component } from 'react'

class DyingCompo extends Component {

    componentWillUnmount()  {
        console.log("I m going to Die :-( ")
    }

  render() {
    return (
      <div>DyingCompo</div>
    )
  }
}

export default DyingCompo