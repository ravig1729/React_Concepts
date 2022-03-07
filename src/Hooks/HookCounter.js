import React from 'react'
import { useState,useEffect } from 'react'

const HookCounter = () => {
        const [count,setCount]=useState(0);
        const increamentCount = () =>{
            setCount(count+1);
        }           // 1st Code

    // const [greet,setGreet]=useState('HI RAVI!');
    // const changeGreet = () =>{
    //     setGreet('LoggedOut!!')
    // }           //2nd Code

    // const [name, setName] = useState({ firstname: '', lastname: '' })         //3rd code.

    // const [item, setItem] = useState([])     //Array giving in:::
    // const addItems = () => {                     //4th code..
    //     // setItem([...item, { id: item.length, value: Math.floor(Math.random() * 10)+1}])        // in place of value, we can give string.
    //     setItem([...item, { id:item.length , value:"Ravi"}])
    // }


    // const [items, setItems] = useState(["abc", "def", "ged"])
    // const [value, setValue] = useState("")
    // const [userTypeValue, setUserTypeValue] = useState([])             //5th code.
    // const addItems = () => {
    //     // setItems( [ ...items, userTypevalue  ] )
    //     setUserTypeValue([...userTypeValue, value])
    // }

    // const [item, setItem] = useState('')
    // useEffect (() => {
    //     console.log("Hii")
    // })
    return (
        <>
            <div>
               <button onClick = {increamentCount}>Count Hook:{count}</button>     //1st code.
               <button style={{'padding':'2rem'}} onClick={()=>setCount(count+1)}>{count}</button>
           </div>

            {/* <div>
               <h1>{greet}</h1>
               <button onClick = {changeGreet}>Logout:</button>     //2nd code.
           </div> */}
            {/* or below code..... */}
            {/* <h1>{greet}</h1>
        <button onClick={()=>setGreet('log out')}>click</button> */}

            {/* <form>
            {name.firstname}            //3rd code...
            {name.lastname}  
            <h1>{JSON.stringify(name)}</h1>
            <input type="text" name="firstname" onChange={(e) => setName({ ...name, firstname: e.target.value })} />
            <input type="text" name="lastname" onChange={(e) => setName({ ...name, lastname: e.target.value })} />  
        </form> */}

            {/* <ul>
                {
                    item.map((ele) => <li>{ele.id}:{ele.value}</li> )      //4th code.
                }
            </ul> */}

            {/* <ul>
                {
                    items.map((item) => <li key={item.id}> {item.id} {item.value} </li>)
                }
            </ul> */}


            {/* {
                 userTypeValue.map((val) => <h2>{val}</h2>)         //5th code
            } 
            // <input value={value} onChange={(e) => setValue(e.target.value)} /> */}

            {/* below code is for all the things. */}
            <button onClick={addItems}>click</button>            

        </>
    )
}

export default HookCounter


// es6
// function sum(a,b,c) {
//     console.log(a,b,c);
// }
// var arrVal = [5,2,1]
// sum(...arrVal)




// items = [
//     {
//         id:1,
//         value:10

