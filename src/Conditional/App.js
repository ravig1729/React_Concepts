import React from 'react'
import Garage from './Garage'
import Login from './Login'
import Goal from './Goal'

// const cars=['BMW','AUDI','FERRARI']

const App = () => {
  return (
    <div>
        {/* <Login loggedIn ={false} /> */}
        {/* <Garage cars={cars}/> */}
        <Goal isGoal = {false} />
    </div>
  )
}

export default App