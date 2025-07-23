import React from 'react';
import { FaUser, FaMoneyCheckAlt, FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const Navigate = useNavigate();

  const user = localStorage.getItem('employeeId')

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
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500 via-white to-blue-400 opacity-70 blur-2xl"></div>

  {/* Actual Dashboard Content (above the background) */}
  <div className="relative z-10 flex min-h-screen">
    {/* Sidebar */}
    <aside className="w-64 p-6 m-5 text-white bg-purple-800 sp5ace-y-4 bg-opacity-90 backdrop-blur-md rounded-3xl">
      <h2 className="mb-6 text-2xl font-bold">Employee Panel</h2>
      <nav className="space-y-2">
        <a href="#" className="block px-3 py-2 rounded hover:bg-purple-700">Dashboard</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-purple-700">My Profile</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-purple-700">Payroll</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-purple-700">Leave Status</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-purple-700">Documents</a>
        <button onClick={handleAnnouncement} className="block px-3 py-2 rounded hover:bg-purple-700">Announcements</button>
        <button onClick={handleAttendance} className="block px-3 py-2 rounded hover:bg-purple-700">Attendance</button>
      </nav>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-purple-800">Welcome, Employee</h1>
        <div className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</div>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
          <FaUser className="text-3xl text-purple-600" />
          <div>
            <h3 className="text-lg font-semibold">My Profile</h3>
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
          <div>
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
