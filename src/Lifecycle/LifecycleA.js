import React,{Component} from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component{

    // state={
    //     name:'ravi'
    // }

    constructor(){
       super()   //used to call the constructor of its parent class. componenet is a parent class and Lifecycle A is a child one.
       this.state ={    // we can write state thing in this directly.
           name:"ravi raj"
       }
       console.log("LifecycleA - constructor");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;   // return an object here,we need to write return or else it throws error.
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }

    render(){
        console.log("LifecycleA render")
        return(
            <>
            <h1>LifecycleA</h1>
            <LifecycleB /> 
            <p>Order of execution happens.</p>
            </>
            
        )
    }
}

export default LifecycleA