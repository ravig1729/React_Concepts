// name export - {} | exact name of compo.
// export default - {} cannot use   | free to use any

### TWO EXPORT ways :
// 1. export default
// 2. name export


## CSS IN REACT
// 1. css stylesheets
// 2. inline styling 
// 3. Css Modules

// state -- class component
// state is a plain javascript Object used by react to respresent about component's current situation. 
// state = {
        name='',
// }

// render : required method : implement in class compoennt to render JSX.
// we cannot update readOnly(props data) in child component

## event handling
// 1. Functional Component
// 2. Class Component

// props // this.props
// state // this.state
// function // this.functioName

// 1. Binding in render method -- this.clickHandler.bind(this)
// 2. Arrow function in render method
// 3. Arrow function for your method

Lifecycle of React:
## Lifecycle methods:

## Mounting :
When an instance of a component is being created and inserted into the DOM.

## Updating :
When a component is being re-render as a result of changes to either its props or state 

## Unmounting : 
When a component is being removed from the DOM

## Mounting :

1. constructor
2. static getDerivedStateFromProps
3. render
4. componentDidMount

## Updating :

1. static getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

## Unmounting :

1. componentWillUnmount


//Description:
# Mounting Phase

### Constructor

- A special type of function that will get called whenever a new component is created.
- Used to initialize states & Binding events.
- Not perform, Http req.

### static getDerivedStateFromProps (rarely used)

- When the state of component depends on change in props.
- set the state
- Not perform, Http req.

### render

- Only Required Method
- return JSX
- Children component Lifecycly methods also get execute
- Not perform, Http req.

### componentDidMount

- Invoked immediately after a component and its child components have been rendered to DOM
- Perform any AJAX call to load your data.

### Updating Phase

## static getDerivedStateFromProps
- Method is called every time a component is re-rendered.
- set the state
- Not perform, Http req.

## shouldComponentUpdate
- Dictates if the component should re-render or not.
- Perfomance Optimization
- Not perform, Http req.

## Render
- Only Required Method
- Return JSX
- Not perform, Http req.

## getSnapshotBeforeUpdate() [Rarely Used]
- Called right before the changes from the virtual DOM are to be reflected in the DOM.
- Capture some Information From DOM

## componentDidUpdate()
- called after the render is finished in the re-render Cycles.

### Unmounting Phase ( LAST WISH )
- Method is invoked immediately before a component is unmounted and destroyed.
- Cancelling any network req. , also invalidating timers.
- DO NOT CALL THE SetSTATE METHOD


## Hookes:
//useState hook allow to use state in functional component.
//In classes, the state is always an Object.
//useState hook return an array with 2 element.
//first element is current value,
//second element is a state setter function.
//When working with object or array, always make sure to use spread operator.
//use key when using map.

## Redux 
//is state container for JS apps.
//Redux is a pattern and library for managing and updating application state,
//using events called 'Action' it serves as a centralzed store for state that needs to be used across your entire application , with some rules.

## 1. ACTION  ( PURE OBJECT )
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


## REDUCER
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

## STORE
// ITS IMPORTANT TO NOTE THAT YOU'LL ONLY HAVE A SINGLE STORE IN A REDUX APPLICATION.
// EVERY REDUX STORE HAS A SINGLE ROOT REUDUCER FUNCTION.
// import {createStore} from 'redux'
// const store = createStore(rootReducer)