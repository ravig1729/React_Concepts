import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: ''
      }
    }
    handleUserNameChange = (event) => {
        console.log(event.target, "typing....");
        this.setState( {
            username : event.target.value.toUpperCase()
        } )
    }
    handleCommentChange = (event) => {
        this.setState( {
            ...this.state,
            comments: event.target.value    
        } )
    }
    render() {
        return (
            <form>
                <div>
                    <label> Username : </label>
                    <input 
                        value={this.state.username} 
                        type='text' 
                        onChange={ this.handleUserNameChange } />
                    
                    <textarea 
                        value={this.state.comments}
                        onChange={this.handleCommentChange}  />


                </div>
            </form>
        )
    }
}

export default Form


// TWO steps : 
// 1. Component state
// 2. onChange Event

// A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

