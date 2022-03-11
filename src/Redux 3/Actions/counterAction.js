import axios from "axios"

export const increase = () =>{
    return {
        type:"AGE_UP",
        payload :1    //api data
    }
}
export const decrease = () =>{
    return {
        type:"AGE_DOWN"
    }
}


//whenever we give to wait for sometime and print , it will show error only give objects , or else you can create a middleWare in your own:::::Redux Saga