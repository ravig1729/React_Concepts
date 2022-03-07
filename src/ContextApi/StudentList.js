import React, { useState } from 'react'
import { useContext} from 'react'
import Student from './Student'
import { StudentContext } from './StudentContext'

const StudentList = () => {

    // const [students, setStudents] = useState([
    //     {Name:"Ravi",studentClass:"X",info:"Nulla ea velit dolore excepteur consectetur incididunt tempor eiusmod commodo."},
    //     {Name:"Raj",studentClass:"XI",info:"Occaecat laboris ea sunt do velit."},
    //     {Name:"Kumar",studentClass:"XII",info:"Labore culpa pariatur esse sint non do in dolore commodo."},
    // ])      // using this in StudentContext

    // const value= useContext(StudentContext);
    // console.log(value);      //getting data from context.

    const [students, setStudents] = useContext(StudentContext)

    return (
        <div className='d-flex justify-content-around'>
            { students.map( (student,index)=>
                <Student key={index} name={student.Name} studentClass={student.studentClass} info={student.info}/>
             ) } 
        </div>
    )
}

export default StudentList