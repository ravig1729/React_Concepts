import React from 'react'

function Welcome() {
  return <>
    <h1>Welcome Ravi Raj</h1>
    <button> Logout! </button>
  </>
}

function Guest() {
  return <>
    <h1>Please login!</h1>
    <button> Login! </button>
  </>
}


const Login = (props) => {
  console.log(props);
  const loggedIn = props.loggedIn;

  if (loggedIn) {
    return <Welcome />
  }
  return <Guest />
}

export default Login