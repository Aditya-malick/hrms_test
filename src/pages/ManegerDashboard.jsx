import React from 'react';
import { FaUsers, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LuLayoutDashboard } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { MdAddCard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useEffect } from 'react';
import { useState } from 'react';

const ManagerDashboard = () => {
  const [employee, setEmployee] = useState([])
  const Navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("userInfo"))

  const handlePerform = () => {
    const role = "Manager"
    Navigate(`/ViewAnnouncements/${role}`)
  }
  
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const departmentName = user.department
  const fetchdata = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/employee/${departmentName}`);
      console.log(res.data)
      setEmployee(res.data);
    } catch (err) {
      console.error("Failed to fetch employee", err);
    }
  }

  useEffect(() => {
    fetchdata()
  },[])
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative absolute inset-0 z-0 bg-gradient-to-r from-purple-300 via-bg-[#f107a3] to-bg-[#00d2ff]  opacity-70 blur-2xl"></div>
      <div className="z-10 flex min-h-screen ">
        {/* Sidebar */}
        <aside className=" shadow-2xl border-2 border-gray-400 w-64 p-6 m-3 space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl ">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-pink-500 to-purple-600 animate-gradient">HRMS Maneger</h2>
          <nav className="space-y-4 font-medium ">
            <Link
              to=""
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <LuLayoutDashboard className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Dashboard
              </span>
            </Link>
            <Link
              to="/viewleave"
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <LuLayoutDashboard className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Leave Applications
              </span>
            </Link>
            <Link
              to="/EmployeeAttendance"
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <BsCashCoin className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Attendence
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <MdAddBusiness className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Assign Task
              </span>
            </Link>
            {/* <Link
            to=""
            className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
          >
            <IoMdPersonAdd className="text-purple-700" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
              Create Employee
            </span>
          </Link> */}
            <button onClick={handlePerform} className="flex items-center w-full gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <MdAddCard className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Announcements</span></button>
            <button onClick={() => { Navigate('/Profile') }} className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <GrAnnounce className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Prifile</span></button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-64 p-4 ">
          <div className="flex shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mb-6 bg-[#F9F9F9] bg-opacity-30 p-6 ">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, {userData.firstname}</h1>
            <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Logout</button>
          </div>

          {/* Analytics */}
          <div className="grid grid-cols-2 gap-6 mb-8 md:grid-cols-3">
            <div className="p-4  bg-white  border-purple-500 rounded shadow border-2 border-gray-400  space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl">
              <h3 className="text-sm text-gray-500">Total Employees</h3>
              <p className="text-2xl font-bold text-gray-800">64</p>
            </div>
            <div className="p-4 bg-white  border-purple-500 rounded shadow border-2 border-gray-400  space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl">
              <h3 className="text-sm text-gray-500">Managers</h3>
              <p className="text-2xl font-bold text-gray-800">10</p>
            </div>
            <div className="p-4 bg-white  border-purple-500 rounded shadow border-2 border-gray-400  space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl">
              <h3 className="text-sm text-gray-500">Departments</h3>
              {/* <p className="text-2xl font-bold text-gray-800">{details.length}</p> */}
            </div>
          </div>

          {/* Department List */}
          <h1 className='text-2xl font-bold text-center text-purple-700'>Employees</h1>
          <section className='grid grid-cols-1 gap-6 mt-5 md:grid-cols-3'>
          {employee.map((data) => (
            <div key={data._id} className="flex items-start p-3 space-x-4 bg-white rounded-lg shadow-md">
              <FaUsers className="mt-1 text-3xl text-indigo-600" />
              <div className="flex-grow ">
                <h2 className="text-lg font-semibold">{data.firstName}</h2>

                <p className="text-sm text-gray-500">Dept ID: {data.employeeId}</p>
                <hr></hr>
                <p className="text-sm text-gray-500">Manager: {data.role}</p>
              </div>
              
              <button
                onClick={() =>
                  Navigate(`/EmployeeDetails/${data.employeeId}`)
                }
                className="px-3 py-1 ml-auto text-white bg-purple-600 rounded hover:bg-purple-700"
              >
                Details
              </button>
            </div>
          ))}
        </section>
        </main>

      </div>
    </div>
  );
};

export default ManagerDashboard;
