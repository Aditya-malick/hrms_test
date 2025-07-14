import React from 'react';
import { FaUsers, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const ManagerDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Manager Panel</h2>
        <nav className="space-y-2">
          <a href="#" className="block hover:bg-indigo-700 rounded px-3 py-2">Dashboard</a>
          <a href="#" className="block hover:bg-indigo-700 rounded px-3 py-2">My Team</a>
          <a href="#" className="block hover:bg-indigo-700 rounded px-3 py-2">Leave Requests</a>
          <a href="#" className="block hover:bg-indigo-700 rounded px-3 py-2">Performance</a>
          <a href="#" className="block hover:bg-indigo-700 rounded px-3 py-2">Reports</a>
          <a href="#" className="block hover:bg-indigo-700 rounded px-3 py-2">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Navbar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-indigo-800">Welcome, Manager</h1>
          <div className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</div>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaUsers className="text-indigo-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Team Overview</h3>
              <p className="text-sm text-gray-600">Manage team members</p>
            </div>
          </div>

          {/* Leave Approvals */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaCheckCircle className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Leave Requests</h3>
              <p className="text-sm text-gray-600">Approve or reject leaves</p>
            </div>
          </div>

          {/* Performance Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaChartLine className="text-orange-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="text-sm text-gray-600">Review team performance</p>
            </div>
          </div>
        </section>
        <br></br>
        <hr/>
        <br></br>
        <h1 className='text-center text-2xl'><b>Departments</b></h1>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaUsers className="text-indigo-600 text-3xl" />
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
