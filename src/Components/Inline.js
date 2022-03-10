import React from 'react'

const heading = {     //Inline CSS
    fontSize : '72px',
    color: 'blue',
    backgroundColor : 'green'
}
const Inline = () => {
  return (
    <div style ={ heading }> Inline</div>
  )
}

export default Inline