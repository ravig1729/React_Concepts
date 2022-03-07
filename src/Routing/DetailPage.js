import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailPage = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>This mobile is - { location.state}</div>
    // <div>This mobile is - { location.state.name}</div>   .. whenever we use multiple data
  )
}

export default DetailPage