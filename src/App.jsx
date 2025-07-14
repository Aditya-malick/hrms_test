import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import HrDashboard from './pages/HrDashboard'
import ManegerDashboard from './pages/ManegerDashboard'
import EmployeeDashboart from './pages/exmployee'
import UserForm from './Components/UserForm'
import { Routes, Route } from 'react-router-dom'
import AddDepartmentForm from './Components/AddDepartment'
import Login from './pages/Login'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/AddDepartmentForm' element={<AddDepartmentForm />} />
        <Route path='/UserForm' element={<UserForm />} />
        <Route path='/HrDashboard' element={<HrDashboard />} />
        <Route path='/EmployeeDashboard' element={<EmployeeDashboart />} />
        <Route path='/ManegerDashboard' element={<ManegerDashboard />} />
      </Routes>
    </>
  )
}

export default App
