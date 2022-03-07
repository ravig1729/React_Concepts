import React from 'react'

const Garage = (props) => {
  const cars =props.cars;

  return (
    <div>
      Garage
      {cars.length >5 && <h2>Lets Release Cars</h2>}
    </div>
  )
}

export default Garage