import React, { Component } from 'react'

class ComponentDM extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // name: "Constructor Method"
             data:[]
        }
    }
    componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ name: "This is ComponentDidMount method" })
    //     }, 2000)
    // }
            fetch('https://jsonplaceholder.typicode.com/users').then(
                (res) => res.json()
            ).then(Apidata => this.setState({data:Apidata}))
          }
        render(){
            console.log(this.state.data);
            return (
                // <div>{this.state.name}</div>
                <div>{this.state.data.map((user) => <div>{user.name}</div>)}</div>
            )
        }
    }

export default ComponentDM


