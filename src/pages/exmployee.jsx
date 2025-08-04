import React from 'react';
import { FaUser, FaMoneyCheckAlt, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
// import { GrAnnounce } from "react-icons/gr";
import { MdAddCard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useUser } from '../UserContext';

const userData = JSON.parse(localStorage.getItem("userInfo"))


const EmployeeDashboard = () => {
  const Navigate = useNavigate();

  const handleAnnouncement = () => {
    const role = "Employee";
    Navigate(`/ViewAnnouncements/${role}`);
  };

  const handleAttendance = () => {
    Navigate(`/Attendance/${user}`);
  };
 

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Blurry Gradient Background */}
      <div className="relative absolute inset-0 z-0 bg-gradient-to-r from-purple-300 via-bg-[#f107a3] to-bg-[#00d2ff]  opacity-70 blur-2xl"></div>

      {/* Actual Dashboard Content (above the background) */}
      <div className="z-10 flex min-h-screen ">
        {/* Sidebar */}
        <aside className=" shadow-2xl border-2 border-gray-400 w-64 p-6 m-3 space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl ">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-pink-500 to-purple-600 animate-gradient">HRMS Employee</h2>
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
              to=""
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <LuLayoutDashboard className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Dashboard
              </span>
            </Link>
            <Link
              to=""
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <BsCashCoin className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Payroll
              </span>
            </Link>
            <Link
              to="/AddDepartmentForm"
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <MdAddBusiness className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Add Department
              </span>
            </Link>
            <Link
              to="/UserForm"
              className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"
            >
              <IoMdPersonAdd className="text-purple-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">
                Create Employee
              </span>
            </Link>
            <button onClick={handleAnnouncement} className="flex items-center w-full gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <MdAddCard className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Announcements</span></button>
            <button onClick={handleAttendance} className="flex items-center w-full gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <MdAddCard className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Attendance</span></button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-64 p-4">
          <div className="flex shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mb-6 bg-[#F9F9F9] bg-opacity-30 p-6 ">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Wecome, {userData.firstname} </h1>
            <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Logout</button>
          </div>

          <div className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</div>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
              <FaUser className="text-3xl text-purple-600" />
              <div>
                <h3 onClick={() => Navigate('/Profile')} className="text-lg font-semibold">My Profile</h3>
                <p className="text-sm text-gray-600">View & update personal info</p>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
              <FaMoneyCheckAlt className="text-3xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">Payroll</h3>
                <p className="text-sm text-gray-600">Check salary details</p>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
              <FaCalendarCheck className="text-3xl text-blue-600" />
              <div onClick={() => Navigate('/ApplyLeave')}>
                <h3 className="text-lg font-semibold">Leave Status</h3>
                <p className="text-sm text-gray-600">Check applied leaves</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
