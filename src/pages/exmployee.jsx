import React from 'react';
import { FaUser, FaMoneyCheckAlt, FaCalendarCheck } from 'react-icons/fa';

const EmployeeDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Employee Panel</h2>
        <nav className="space-y-2">
          <a href="#" className="block hover:bg-purple-700 rounded px-3 py-2">Dashboard</a>
          <a href="#" className="block hover:bg-purple-700 rounded px-3 py-2">My Profile</a>
          <a href="#" className="block hover:bg-purple-700 rounded px-3 py-2">Payroll</a>
          <a href="#" className="block hover:bg-purple-700 rounded px-3 py-2">Leave Status</a>
          <a href="#" className="block hover:bg-purple-700 rounded px-3 py-2">Documents</a>
          <a href="#" className="block hover:bg-purple-700 rounded px-3 py-2">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Navbar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-purple-800">Welcome, Employee</h1>
          <div className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</div>
        </header>

        {/* Analytics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaUser className="text-purple-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">My Profile</h3>
              <p className="text-sm text-gray-600">View & update personal info</p>
            </div>
          </div>

          {/* Payroll */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaMoneyCheckAlt className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Payroll</h3>
              <p className="text-sm text-gray-600">Check salary details</p>
            </div>
          </div>

          {/* Leave Status */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaCalendarCheck className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Leave Status</h3>
              <p className="text-sm text-gray-600">Check applied leaves</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
