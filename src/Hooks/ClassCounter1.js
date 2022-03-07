import React, { Component } from 'react'

class ClassCounter1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('mounted');
        document.title = `Clicked ${this.state.count} Times`
    }
    componentDidUpdate()    {
        console.log('updated');
        document.title = `Clicked ${this.state.count} Times`
    }
    render() {
        return (
            <div>
                <button onClick={ 
                    ()=>this.setState( { count: this.state.count+1 } ) 
                } > Click {this.state.count} Times </button>
            </div>
        )
    }
}



export default ClassCounter1