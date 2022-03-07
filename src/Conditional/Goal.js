import React from 'react'

const MadeGoal = () => {
  return <h1>HURRAY GOOOOOAL !</h1>
}

const MissedGoal = () =>{
  return <h1> MISSED :-(</h1>
}


const Goal = (props) => {

  const isGoal = props.isGoal
  console.log(isGoal);

  return (
    <>
    { isGoal ?  <MadeGoal />  :  <MissedGoal />    }            
</>
  )
}

export default Goal