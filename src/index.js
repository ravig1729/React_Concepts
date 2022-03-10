import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {App}  from "./App";
import store from "./Redux 2/Store";


ReactDOM.render(
    <Provider store= {store}>
    < App />  
    </Provider>,
    document.querySelector('#root')
);