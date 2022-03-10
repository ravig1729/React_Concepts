import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from './Actions/studentAction'
import Student from './Student'

const AddStudent = () =>{

    const[student,setStudent] = useState({name:'',country:''})

    const dispatch =useDispatch()

    useSelector((state) => console.log(state.studentReducer));
    const studentDataFromStore = useSelector ((state) => state.studentReducer)

    const handleSubmit = event => {
       event.preventDefault() ;


       const { name , country} = student;

       if(name === '' || country ==='') return ;
        //   alert('please enter ::::-)')
       dispatch (addStudent(student))

       setStudent({name:'',country:''})
    }
    return (
        <div>
            {
                studentDataFromStore.map((student,index) =>
                    <Student key={index} index={index} studentObj={student} />
                )
            }
            <h1>Add New Student</h1>
            <form onSubmit ={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <br/>
                <input type='text'style={{marginBottom:'10px'}} name='name'value={student.name} onChange={(e) =>setStudent({...student, name:e.target.value })} placeholder="Students Name"/>
                <br/>
                <label htmlFor='country'>Country</label>
                <br/>
                <input type='text' style={{marginBottom:'10px'}} name='country'value={student.country} onChange={(e) =>setStudent({...student, country:e.target.value })} placeholder="Students Country"/>
                <br/>
                <button type='submit'>Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent