import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import "./index.css"
import HrDashboard from './pages/Hrdashboard'
import ManegerDashboard from './pages/ManegerDashboard'
import EmployeeDashboart from './pages/exmployee'
import UserForm from './Components/UserForm'
import { Routes, Route } from 'react-router-dom'
import AddDepartmentForm from './Components/AddDepartment'
import Login from './pages/Login'
import Employeelist from './Components/employeelist'
import CreateAnnouncement from './Components/CreateAnnouncements'
import ViewAnnouncements from './Components/ViewAnnouncements'
import EmployeeAttendance from './pages/employeeAttendence'
import Profile from './pages/Profile';
import EmployeeDetails from './Components/EmployeeDetails'
import ApplyLeave from './Components/ApplyLeave'
import ManagerLeavePage from './pages/ManegerLeavePage';
function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/CreateAnnouncement' element={<CreateAnnouncement />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/ViewAnnouncements/:role' element={<ViewAnnouncements />} />
        <Route path='/AddDepartmentForm' element={<AddDepartmentForm />} />
        <Route path='/UserForm' element={<UserForm />} />
        <Route path='/HrDashboard' element={<HrDashboard />} />
        <Route path='/EmployeeDashboard' element={<EmployeeDashboart />} />
        <Route path='/ManegerDashboard' element={<ManegerDashboard />} />
        <Route path='/employeelist/:departmentName' element={<Employeelist />} />
        <Route path='/Attendance/:employeeId' element={<EmployeeAttendance />} />
        <Route path='/EmployeeAttendance' element={<EmployeeAttendance />} />
        <Route path='/EmployeeDetails/:id' element={<EmployeeDetails />} />
        <Route path='/ApplyLeave' element={<ApplyLeave/>} />
        <Route path='/viewleave' element={<ManagerLeavePage/>} />
 
      </Routes>
    </>
  )
}

export default App
