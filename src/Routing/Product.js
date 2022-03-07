import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Product = () => {

  return (
    <div style={{ textAlign:'center' }}>
        <h1>Products</h1>
        <h3>Every Products Are Below : </h3>
        {/* <Link className='btn btn-success' to='/products/mobile'>Mobile</Link>
        <Link className='btn btn-danger' to='/products/laptop'>Laptop</Link> */}
        <NavLink
         style={
           ({ isActive}) => {
             return {
              backgroundColor:isActive? 'green':'black',
              color: isActive? 'pink':'tomato'
            }
          }
         }
          to='/products/mobile' className='btn btn-primary'>Mobile</NavLink>
          <NavLink
         style={
           ({ isActive}) => {return {backgroundColor:isActive? 'green':'black'}}
         }
          to='/products/laptop' className='btn btn-primary'>Laptop</NavLink>
          <NavLink
         style={
           ({ isActive}) => {return {backgroundColor:isActive? 'green':'black'}}
         }
          to='/products/watch' className='btn btn-primary'>Watch</NavLink>
        <Outlet />
    </div>
  )
}

export default Product