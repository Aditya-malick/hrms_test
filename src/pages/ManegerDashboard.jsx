import React from 'react';
import { FaUsers, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const Navigate = useNavigate()
  
  const handlePerform = () => {
    const role = "Manager"
    Navigate(`/ViewAnnouncements/${role}`)
    
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 p-6 space-y-4 text-white bg-indigo-800">
        <h2 className="mb-6 text-2xl font-bold">Manager Panel</h2>
        <nav className="space-y-2">
          <a href="#" className="block px-3 py-2 rounded hover:bg-indigo-700">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-indigo-700">My Team</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-indigo-700">Leave Requests</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-indigo-700">Performance</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-indigo-700">Reports</a>
          <button onClick={handlePerform} className="block px-3 py-2 rounded hover:bg-indigo-700">Announcements</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Navbar */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-indigo-800">Welcome, Manager</h1>
          <div className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</div>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Team Overview */}
          <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
            <FaUsers className="text-3xl text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold">Team Overview</h3>
              <p className="text-sm text-gray-600">Manage team members</p>
            </div>
          </div>

          {/* Leave Approvals */}
          <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
            <FaCheckCircle className="text-3xl text-green-600" />
            <div>
              <h3 className="text-lg font-semibold">Leave Requests</h3>
              <p className="text-sm text-gray-600">Approve or reject leaves</p>
            </div>
          </div>

          {/* Performance Reviews */}
          <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-3xl text-orange-600" />
            <div>
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="text-sm text-gray-600">Review team performance</p>
            </div>
          </div>
        </section>
        <br></br>
        <hr/>
        <br></br>
        <h1 className='text-2xl text-center'><b>Departments</b></h1>
        <section className='grid grid-cols-1 gap-6 mt-5 md:grid-cols-3'>
          <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
            <FaUsers className="text-3xl text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold">Team Overview</h3>
              <p className="text-sm text-gray-600">Manage team members</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManagerDashboard;
