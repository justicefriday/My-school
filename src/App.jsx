import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './Layouts/MainLayout';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import NotFound from './pages/NotFound';
import StudentPage, { studentLoader} from './pages/StudentPage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';

const App = () => {
//Add new Student
  const addStudent = async (newStudent) => {
  const res = await fetch('/api/students',{
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body:JSON.stringify(newStudent)
  })
  return;
};

  //Delete Student
  const deleteStudent = async (id) => {
    const res = await fetch(`/api/students/${id}`,{
    method: 'DELETE',
  })
  return;
  }
 
  //update studet infor
  const UpdateStudent = async (student) => {
    const res = await fetch(`/api/students/${student.id}`,{
    method: 'PUT',
    headers: {
      'Content-type':'application/json'
    },
    body:JSON.stringify(student)
  })
  return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="add-student" element={<AddStudentPage AddStudentSubmit={addStudent} />} />
        <Route path="students/:id" element={<StudentPage deleteStudent={ deleteStudent} />} loader={studentLoader} />
        <Route path="edit-students/:id" element={<EditStudentPage updatedStudentSubmit={UpdateStudent}/>} loader={studentLoader} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
