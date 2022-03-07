import React, { createContext, useState } from "react";
// import StudentStatus from "./studentStatus";
// import StudentList from "./StudentList";

export const StudentContext = createContext();

export const StudentProvider = (props) => {

    const [students, setStudents] = useState([])

    // const [students, setStudents] = useState([
        // {Name:"Ravi",studentClass:"X",info:"Nulla ea velit dolore excepteur consectetur incididunt tempor eiusmod commodo."},
        // {Name:"Raj",studentClass:"XI",info:"Occaecat laboris ea sunt do velit."},
        // {Name:"Kumar",studentClass:"XII",info:"Labore culpa pariatur esse sint non do in dolore commodo."},
    // ])

    return (
        <StudentContext.Provider value={[students,setStudents]}>
           {/* <StudentList/>     // it will in App.js
           <StudentStatus/> */}
           {props.children}
        </StudentContext.Provider>
    )
}
