import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const HrDashboard = () => {
  const Navigate = useNavigate()
  const [details, setDetails] = useState([]);

  const handleClick = (data) => {
    const departmentName = data.dName
    Navigate(`/employeelist/${departmentName}`)
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/departments/all")
      .then(response => {
        setDetails(response.data);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 px-4 py-6 bg-white border-r shadow-md">
        <h2 className="mb-8 text-2xl font-bold text-purple-700">HRMS Admin</h2>
        <nav className="space-y-4 font-medium text-gray-700">
          <Link to="" className="block hover:text-purple-700">Dashboard</Link>
          <Link to="/UserForm" className="block hover:text-purple-700">Add Employess</Link>
          <Link to="/AddDepartmentForm" className="block hover:text-purple-700">Add Department</Link>
          <Link to="" className="block hover:text-purple-700">Leaves</Link>
          <Link to="" className="block hover:text-purple-700">Payroll</Link>
          <Link to="" className="block hover:text-purple-700">Reviews</Link>
          <Link to="" className="block hover:text-purple-700">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome, HR</h1>
          <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Logout</button>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          <div className="p-4 bg-white border-t-4 border-purple-500 rounded shadow">
            <h3 className="text-sm text-gray-500">Total Employees</h3>
            <p className="text-2xl font-bold text-gray-800">64</p>
          </div>
          <div className="p-4 bg-white border-t-4 border-blue-500 rounded shadow">
            <h3 className="text-sm text-gray-500">Managers</h3>
            <p className="text-2xl font-bold text-gray-800">10</p>
          </div>
          <div className="p-4 bg-white border-t-4 border-green-500 rounded shadow">
            <h3 className="text-sm text-gray-500">Departments</h3>
            <p className="text-2xl font-bold text-gray-800">{details.length}</p>
          </div>
        </div>

        {/* Department List */}
        <h1 className='text-2xl font-bold text-center text-purple-700'>Departments</h1>
        <section className='grid grid-cols-1 gap-6 mt-5 md:grid-cols-3'>
          {details.map((data) => (
            <div key={data._id} className="flex items-start p-6 space-x-4 bg-white rounded-lg shadow-md">
              <FaUsers className="mt-1 text-3xl text-indigo-600" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{data.dName}</h2>
                <p className="text-sm text-gray-500">Dept ID: {data.dId}</p>
                <p className="text-sm text-gray-500">Manager: {data.maneger}</p>
                <p className="mt-1 text-sm text-gray-600">{data.description}</p>
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
  );
};

export default HrDashboard;
