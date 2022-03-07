import React from 'react'

class Message extends React.Component {
    
    // state = {
    //     message :' Hello Welcome!'
    // }

    render() {
        console.log(this.props);

        return (
            <>
            <div>  {this.props.name}</div>       
            </>
        )
    }
}


export default Message