import React from 'react'

const Student = ({ name, studentClass, info, deleteStudent,index }) => {
    return (
        <div>
            <div className="card" style={{maxWidth: '18rem'}}>
                <div className='card-header'>{name}
                <i onClick={()=>deleteStudent(index)} className="fa fa-trash" style={{color: 'red'}} aria-hidden="true"></i></div>
                <div className="card-body">
                    <h5 className="card-title">{studentClass}</h5>
                    <p className="card-text">{info}</p>
                </div>
            </div>
        </div>
    )
}

export default Student