import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './Actions/counterAction';

const OurCounter = () => {

    const myState = useSelector(state=>state.handleMyCounter)
    const dispatch = useDispatch();

    return (
        <div>
            <div className='jumbotron'>

                <h1 className='display-4'>Our Counter App</h1>
                <p>Student Age : {myState}</p>
                <p className='lead'>
                    <button className='btn btn-success' onClick={()=>dispatch( increase() )} > Increase </button>
                    <button className='btn btn-danger' onClick={()=>dispatch( decrease() )}> Decrease </button>
                </p>
            </div>
        </div>
    )
}

export default OurCounter