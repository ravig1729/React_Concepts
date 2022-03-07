import React from 'react'
import { useContext } from 'react'
import { StudentContext } from './StudentContext'

const StudentStatus = () => {

    let [students, setStudents] = useContext(StudentContext);

    return (
        <div><div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <em className="display-4">Total students are : {students.length}</em><br/><br/><br/>
            </div>
        </div></div>
    )
}

export default StudentStatus