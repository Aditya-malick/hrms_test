import React, { useEffect, useState } from "react";
import axios from "axios";

const LeavePage = () => {
  const [leaves, setLeaves] = useState([]);
  const [reason, setReason] = useState("");
  const [title, setTitle] = useState("");

  const user = JSON.parse(localStorage.getItem("userInfo"));
  const employeeId = user.employeeId
  const department = user.department
  
  const fetchLeaves = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/leave/employee/${employeeId}`);
      console.log("Data from backend",res.data)
      setLeaves(res.data.data);
    } catch (error) {
      console.error("Error fetching leaves", error);
    }
  };

  const handleApplyLeave = async (e) => {
    e.preventDefault();
    if (!reason || !title) return alert("Please fill all fields");

    try {
      const res = await axios.post("http://localhost:8080/api/leave/apply", {
        employeeId,
        department,
        title,
        reason,
      });
      console.log(res.data)

      if (res.data) {
        alert("Leave applied successfully");
        setReason("");
        setTitle("");
        fetchLeaves();
      }
    } catch (error) {
      console.error("Error applying for leave", error);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div className="max-w-5xl p-6 mx-auto">
      {/* Apply for Leave Section */}
      <div className="p-6 mb-10 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Apply for Leave</h2>
        <form onSubmit={handleApplyLeave} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Leave title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              placeholder="Title off Application"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Leave Reason</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md "
              placeholder="Enter reason for leave"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Apply
          </button>
        </form>
      </div>

      {/* Leave Status Table */}
      <div className="p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">My Leave Applications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="text-gray-700 bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border-b">Date</th>
                <th className="px-4 py-2 text-left border-b">Reason</th>
                <th className="px-4 py-2 text-left border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-4 text-center text-gray-500">No leave applications found</td>
                </tr>
              ) : (
                leaves.map((leave, idx) => (
                  <tr key={idx} className="transition-all hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{new Date(leave.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border-b">{leave.reason}</td>
                    <td className="px-4 py-2 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                          ${
                            leave.status === "Active"
                              ? "bg-yellow-200 text-yellow-800"
                              : leave.status === "Pending"
                              ? "bg-blue-200 text-blue-800"
                              : "bg-red-200 text-red-800"
                          }`}
                      >
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeavePage;
