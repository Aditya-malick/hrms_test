import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeAttendance = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const department = user.department
  // Fetch attendance history on page load
  const fetchAttendance = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/attendance/by-department/${department}`);
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

      <h3 className="mb-2 text-lg font-semibold"> Attendance </h3>
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
