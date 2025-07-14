import React from 'react'

const HrDashboard = () => {
  return (
    <div>
        <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r px-4 py-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-8">HRMS Admin</h2>
        <nav className="space-y-4 text-gray-700 font-medium">
          <a href="#" className="block hover:text-purple-700">Dashboard</a>
          <a href="#" className="block hover:text-purple-700">Create User</a>
          <a href="#" className="block hover:text-purple-700">Departments</a>
          <a href="#" className="block hover:text-purple-700">Leaves</a>
          <a href="#" className="block hover:text-purple-700">Payroll</a>
          <a href="#" className="block hover:text-purple-700">Reviews</a>
          <a href="#" className="block hover:text-purple-700">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome, HR</h1>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Logout</button>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow border-t-4 border-purple-500">
            <h3 className="text-sm text-gray-500">Total Employees</h3>
            <p className="text-2xl font-bold text-gray-800">64</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-t-4 border-blue-500">
            <h3 className="text-sm text-gray-500">Managers</h3>
            <p className="text-2xl font-bold text-gray-800">10</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-t-4 border-green-500">
            <h3 className="text-sm text-gray-500">Departments</h3>
            <p className="text-2xl font-bold text-gray-800">6</p>
          </div>
        </div>

        {/* Department List */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Department List</h2>
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Department</th>
                <th className="p-2 border">Head</th>
                <th className="p-2 border">Employees</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="p-2 border">Engineering</td>
                <td className="p-2 border">Aniket Singh</td>
                <td className="p-2 border">22</td>
              </tr>
              <tr className="text-center">
                <td className="p-2 border">Marketing</td>
                <td className="p-2 border">Megha Paul</td>
                <td className="p-2 border">14</td>
              </tr>
              <tr className="text-center">
                <td className="p-2 border">HR</td>
                <td className="p-2 border">You</td>
                <td className="p-2 border">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
    </div>
  )
}

export default HrDashboard