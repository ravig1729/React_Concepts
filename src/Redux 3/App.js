import React from 'react'
import { Provider } from 'react-redux'
import OurCounter from './OurCounter'
import store from './Store'

function App () {
    return(
        <Provider store={store}>
            <div>
                <OurCounter />
            </div>
        </Provider>
    ) 
}

export default App


//Redux is state container for JS apps.
//Redux is a pattern and library for managing and updating application state,
//using events called 'Action' it serves as a centralzed store for state that needs to be used across your entire application , with some rules.

// 1. ACTION  ( PURE OBJECT )
// Actions are plain JS objects, that have type field.
// Actions only tell 'WHAT TO DO', But they donts tell how to do.


// {
//     type: 'INCREMENT',
//     payload: num
// }
// {
//     type : 'DECREMENT',
//     payload: num
// }

// const incNumber = (num) => {
//     return {
//         type: 'INCREMENT',
//         payload: num
//     }
// }
// const decNumber = (num) => {
//     return {
//         type: 'DECREMENT',
//         payload: num //api calls
//     }
// }


// REDUCER
// Reducer are functions that take the current state and an action as argument and
// return a new state result.
// const stateValue = useState('')
// const initialState = 0
// const changeTheNumber = ( state = initialState, action ) => {
    
//     switch( action.type ) {
//         case "INCREMENT": return state + action.payload;
//         case "DECREMENT" :   return state - 1;
//         default : return state
//     }
// }

// STORE
// ITS IMPORTANT TO NOTE THAT YOU'LL ONLY HAVE A SINGLE STORE IN A REDUX APPLICATION.
// EVERY REDUX STORE HAS A SINGLE ROOT REUDUCER FUNCTION.
// import {createStore} from 'redux'
// const store = createStore(rootReducer)

//npm i redux react-redux


//Redux-Saga :::is a middleware library used to allow a redux store to interact with resource outside of itself asynchronously.


