import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeAttendance = () => {
  const [mode, setMode] = useState('Office');
  const [attendanceList, setAttendanceList] = useState([]);
  const user = JSON.parse(localStorage.getItem('userInfo'));
      const employeeId = user.employeeId;
  // Fetch attendance history on page load
  const fetchAttendance = async () => {
    try {
      
      console.log(employeeId)
      const res = await axios.get(`http://localhost:8080/api/attendance/employee/${employeeId}`);
      console.log(res.data)
      setAttendanceList(res.data);
    } catch (err) {
      console.error("Failed to fetch attendance", err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  // Handle Check-In
  const handleCheckIn = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/attendance/mark', {
        employeeId,
        mode,
      });
      alert(res.data.message);
      fetchAttendance(); 
    } catch (err) {
      console.error("Check-in failed", err);
    }
  };

  // Handle Check-Out
  const handleCheckOut = async () => {
    try {
      
      const res = await axios.post('http://localhost:8080/api/attendance/mark', {
        employeeId,
      });
      alert(res.data.message);
      fetchAttendance(); 
    } catch (err) {
      console.error("Check-out failed", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold text-purple-700">Employee Attendance</h2>

      <div className="p-4 mb-6 bg-white rounded shadow">
        <div className="mb-4">
          <label className="block mb-1">Work Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Office">Office</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCheckIn}
            className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Check In
          </button>

          <button
            onClick={handleCheckOut}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Check Out
          </button>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold">Your Attendance History</h3>
      <div className="p-4 bg-white rounded shadow">
        {attendanceList.length === 0 ? (
          <p>No attendance records found.</p>
        ) : (
          <table className="w-full overflow-hidden text-left border border-gray-300 rounded">
  <thead className="bg-purple-100">
    <tr>
      <th className="px-4 py-2 border">Date</th>
      <th className="px-4 py-2 border">Check-In</th>
      <th className="px-4 py-2 border">Check-Out</th>
      <th className="px-4 py-2 border">Mode</th>
    </tr>
  </thead>
  <tbody>
    {attendanceList.map((entry) => (
      <tr key={entry._id} className="transition hover:bg-gray-100">
        <td className="px-4 py-2 border">
          {new Date(entry.date).toLocaleDateString()}
        </td>
        <td className="px-4 py-2 border">
          {entry.checkIn ? new Date(entry.checkIn).toLocaleTimeString() : '—'}
        </td>
        <td className="px-4 py-2 border">
          {entry.checkOut ? new Date(entry.checkOut).toLocaleTimeString() : '—'}
        </td>
        <td className="px-4 py-2 border">{entry.mode || '—'}</td>
      </tr>
    ))}
  </tbody>
</table>

        )}
      </div>
    </div>
  );
};

export default EmployeeAttendance;
