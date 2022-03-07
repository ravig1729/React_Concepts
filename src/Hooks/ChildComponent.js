import React, { useEffect } from 'react'

const ChildComponent = () => {

    useEffect(() => {
        console.log('Mounting');      // work on mounting state 
        return ()=> {console.log("I am going bye maccha!!!!")}    //work on unmounting state only..
    })

  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent