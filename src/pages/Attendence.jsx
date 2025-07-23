import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeAttendance = () => {
  const [mode, setMode] = useState('Office');
  const [attendanceList, setAttendanceList] = useState([]);

  const employeeId = localStorage.getItem('employeeId');

  // Fetch attendance history on page load
  const fetchAttendance = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/attendance/employee/${employeeId}`);
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
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-700">
                <th className="py-2">Date</th>
                <th className="py-2">Check-in</th>
                <th className="py-2">Check-out</th>
                <th className="py-2">Mode</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((entry) => (
                <tr key={entry._id} className="text-gray-600 border-t">
                  <td className="py-2">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="py-2">
                    {entry.checkIn ? new Date(`1970-01-01T${entry.checkIn}`).toLocaleTimeString() : '—'}
                  </td>
                  <td className="py-2">
                    {entry.checkOut ? new Date(`1970-01-01T${entry.checkOut}`).toLocaleTimeString() : '—'}
                  </td>
                  <td className="py-2">{entry.mode || '—'}</td>
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
