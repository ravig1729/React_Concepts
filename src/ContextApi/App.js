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




// Hooks : They allow you to use React Features without having to write a class.
// Avoids the whole confsion with 'this' keyword.