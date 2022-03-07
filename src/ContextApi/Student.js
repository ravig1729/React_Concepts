import React from 'react'

const Student = ({ name, studentClass, info }) => {
    return (
        <div>
            <div className="card" style={{maxWidth: '18rem'}}>
                <div className='card-header'>{name}</div>
                <div className="card-body">
                    <h5 className="card-title">{studentClass}</h5>
                    <p className="card-text">{info}</p>
                </div>
            </div>
        </div>
    )
}

export default Student