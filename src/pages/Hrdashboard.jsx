import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { MdAddCard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";







const HrDashboard = () => {
  const Navigate = useNavigate()
  const [details, setDetails] = useState([]);

  const handleClick = (data) => {
    const departmentName = data.dName
    Navigate(`/employeelist/${departmentName}`)
  };

  const handlePerform = () => {
    const role = "HR"
    Navigate(`/ViewAnnouncements/${role}`)

  }


  useEffect(() => {
    axios.get("http://localhost:8080/api/departments/all")
      .then(response => {
        setDetails(response.data);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative absolute inset-0 z-0 bg-gradient-to-r from-purple-300 via-bg-[#f107a3] to-bg-[#00d2ff]  opacity-70 blur-2xl"></div>
      <div className="z-10 flex min-h-screen ">
        {/* Sidebar */}
        <aside className=" shadow-2xl border-2 border-gray-400 w-64 p-6 m-3 space-y-4 bg-[#F9F9F9] bg-opacity-30 backdrop-blur-md rounded-3xl ">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-pink-500 to-purple-600 animate-gradient">HRMS Admin</h2>
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
            <button onClick={handlePerform} className="flex items-center w-full gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <MdAddCard className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Announcements</span></button>
            <button onClick={() => { Navigate('/CreateAnnouncement') }} className="flex items-center gap-2 px-3 py-2 border border-gray-400 rounded hover:bg-purple-400"> <GrAnnounce className="text-purple-700" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-gradient">Add Announcement</span></button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-64 p-4 ">
          <div className="flex shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mb-6 bg-[#F9F9F9] bg-opacity-30 p-6 ">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, HR</h1>
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
              <p className="text-2xl font-bold text-gray-800">{details.length}</p>
            </div>
          </div>

          {/* Department List */}
          <h1 className='text-2xl font-bold text-center text-purple-700'>Departments</h1>
          <section className='grid grid-cols-1 gap-6 mt-5 md:grid-cols-3'>
            {details.map((data) => (
              <div key={data._id} className="flex items-start p-3 space-x-4 bg-white rounded-lg shadow-md">
                <FaUsers className="mt-1 text-3xl text-indigo-600" />
                <div className="flex-grow ">
                  <h2 className="text-lg font-semibold">{data.dName}</h2>

                  <p className="text-sm text-gray-500">Dept ID: {data.dId}</p>
                  <hr></hr>
                  <p className="text-sm text-gray-500">Manager: {data.maneger}</p>
                </div>
                <button
                  onClick={() =>
                    handleClick(data)
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

export default HrDashboard;
