import React from "react";
import ReactDOM from "react-dom";


// function Hello(){
//     return (
//         <h1>Hello</h1>
//     )
// }

// function World() {
//     return (
//         <h1>World</h1>
//     )
// }

// function HelloWorld()  {    //State less function Component SFC.
    // return (     // return get one result only , if we want to add one more p tag in it , it will throw error.for this , we need to do place in div.Its in down code.
    //     <h1>Hello World</h1>
    // )

    // return (<div>    
    //     <h1>Hello</h1>
    //     <p> Lorem10</p>
    // </div>)  // We can write multiple tags using div tag or <>(<React.fragment>) .

    // return React.createElement(
    //     'span',    // We can write those thing in by creating child elements in span tag.
    //     {},
    //     'Hello',
    //     'World'
    // )

    // return React.createElement(
    //     'span',
    //     {},
    //     React.createElement( 'div', {}, 'child1'),
    //     React.createElement( 'div', {}, 'child2',
    //         React.createElement( 'div', {} , 'child3'),
    //     ),
    // )

    // return (
    //     <div>
    //     <Hello/> <Hello/> < Hello/>  
    //     </div>
    // )

// }
ReactDOM.render(
    <HelloWorld/>,    //element or component
    document.querySelector('#root')
);

// ReactDOM.render([React Element],[DOM Element])