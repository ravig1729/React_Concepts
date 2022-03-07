import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const ProductDesc = () => {

    const { myMobileParam } = useParams();
    const navigate = useNavigate()
    // const myData = {
    //     name:'Samsung',
    //     price:29000
    // }    ... in button in place of myMobileParam , write myData , you can add multiple data

  return (
    <div>
        <h1> Product Name :  {myMobileParam} </h1>
        <button className='btn btn-warning' onClick = { () => navigate('/detailpage',{state : myMobileParam})}>
            Go to Details
        </button>
    </div>
  )
}

export default ProductDesc

//While navigating to different path [pass data as well]
//Before navigating to different path [perform js logic]