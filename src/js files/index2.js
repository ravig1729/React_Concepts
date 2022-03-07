import React from "react";
import ReactDOM from "react-dom";

const Welcome = () => <h1>Welcome</h1>  //Functional Component

class Welcome extends React.Component {   //Class Component

    render(){
        return <h1>Welcome</h1>
    }
}

ReactDOM.render(
    <Welcome />, 
    document.getElementById('root')
)

//Functional Component-Stateless
//Simple Function
//Absence of 'this ' keyword
//Solution without using state
//Mainly responsible for the UI

//Class Component - Stateful
//More feature rich
//Maintains their own private data-state
//Complex UI logic
//Provide lifecycle methods.