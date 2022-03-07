import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent'

const HookCounterOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [toggle, setToggle] = useState(false)

    //   useEffect( () => {          //called in mounting +change in any state value.
    //     console.log("Welcome Maccha!!");
    // })

    //   useEffect( () => {          //mounting + change in count state only
    //       console.log('useEffect Called');
    //       document.title = `Clicked ${count} Times`
    //   },[count])

    //   useEffect( () => {
    //     console.log('Name State Changed');
    // },[name])

    // useEffect(() => {          //only called in mounting phase.
    //     alert("Welcome Maccha!!")
    // }, [])

    return (
        <div>
            {/* <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={
                () => setCount(count + 1)
            } > Click {count} Times </button> */}

            {
                toggle? <ChildComponent />  : ""
            }
            <button onClick ={() => setToggle(!toggle)}>show | Disable</button>
        </div>
    )
}

export default HookCounterOne