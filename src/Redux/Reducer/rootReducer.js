import { combineReducers } from "redux"
import handleMyCounter from "./counterReducer"

const rootReducer = combineReducers( {
    handleMyCounter,
    // reducer2,
    // reducer3
})

export default rootReducer