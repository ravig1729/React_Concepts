import React from 'react'
import { StudentProvider } from './ContextApi/StudentContext'
import StudentList from './ContextApi/StudentList'
import StudentStatus from './ContextApi/studentStatus'
import AddStudent from './ContextApi/AddStudent'

const App = () => {
  return (
    <StudentProvider>
      <div>
          <StudentStatus />
          <AddStudent /><br/><br/><br/>
          <StudentList />
      </div>
    </StudentProvider>
  )
}

export default App