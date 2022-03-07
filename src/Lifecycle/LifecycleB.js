import React,{Component} from 'react'

class LifecycleB extends Component{

    // state={
    //     name:'ravi'
    // }

    constructor(){
       super()   //used to call the constructor of its parent class. componenet is a parent class and Lifecycle A is a child one.
       this.state ={    // we can write state thing in this directly.
           name:"ravi raj"
       }
       console.log("LifecycleB - constructor");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;   // return an object here,we need to write return or else it throws error.
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }

    render(){
        console.log("LifecycleB render")
        return(
            <>
            <h1>LifecycleB</h1>
            </>
            
        )
    }
}

export default LifecycleB