import React, { useState } from 'react'
import { useContext } from 'react'
import { StudentContext } from './StudentContext'


const AddStudent = () => {
    const [Name, setName] = useState('')
    const [Class, setClass] = useState('')
    const [Info, setInfo] = useState('')
    const [students, setStudents] = useContext(StudentContext);

    const handleAddStudent = () => {
        let studentObj = { 
            id:students.length,
            Name:Name,
            studentClass:Class,
            info:Info
        }
        setStudents( [ ...students, studentObj ] )

    }
    return (
        <div className='d-flex justify-content-around'>
            <div className="jumbotron jumbotron-fluid">
                <div className='form-row align-items-center'>
                    <div className='col-auto'>
                        <h3>Name</h3>
                        <input type='text'
                            className='form-control mb-2'
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='col-auto'>
                        <h3>Class Name</h3>
                        <input type='text'
                            className='form-control mb-2'
                            value={Class}
                            onChange={(e) => setClass(e.target.value)}
                        />
                    </div>
                    <div className='col-auto'>
                        <h3>Something About Student :</h3>
                        <textarea
                            className='form-control mb-2'
                            value={Info}
                            onChange={(e) => setInfo(e.target.value)}
                        />
                    </div>
                    <div className='col-auto'>
                        <button onClick={handleAddStudent} className="btn btn-success mb-2">Add Student</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
