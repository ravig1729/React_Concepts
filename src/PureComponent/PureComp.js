import React,{ PureComponent } from "react";
import { Component } from "react";

class PureComp extends PureComponent {
    render() {
        console.log("PURE component render");
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
export default PureComp