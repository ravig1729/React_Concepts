import React from 'react'
// import ComponentDM from './Lifecycle/ComponentDM'
// import GetDerived from './Lifecycle/GetDerived'
// import LifecycleA from './Lifecycle/LifecycleA'
// import GetSnapBefore from './Lifecycle/GetSnapBefore'
// import LifecycleC from './Lifecycle/LifecycleC'
import DyingCompo from './DyingCompo'

class App extends React.Component {
  state = {
    show: false
  }
  render() {
    return (
      <div>
        {/* <LifecycleA /> */}
        {/* <GetDerived name="viswanadh" /> */}
        {/* <ComponentDM/> */}
        {/* <GetSnapBefore /> */}
        {/* <LifecycleC /> */}
        {this.state.show ? <DyingCompo /> : ''}
        <button onClick={() => this.setState({ show: !this.state.show })}>Show</button>
      </div>
    )
  }

}

export default App