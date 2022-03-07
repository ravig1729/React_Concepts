import React from 'react'
import { StudentProvider } from './StudentContext'
import StudentList from './StudentList'
import StudentStatus from './studentStatus'
import AddStudent from './AddStudent'

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