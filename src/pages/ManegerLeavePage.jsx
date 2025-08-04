import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ManagerLeavePage = () => {
    const [leaves, setLeaves] = useState([]);
    const [statusUpdates, setStatusUpdates] = useState({});

    const user = JSON.parse(localStorage.getItem('userInfo')); // Get from login data
    const department = user.department

    // Fetch leave applications of manager's department
    const fetchLeaves = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/leave/manager/${department}`);
            setLeaves(res.data.data);
        } catch (error) {
            console.error("Failed to fetch leaves:", error);
            toast.error("Error fetching leave data");
        }
    };

    useEffect(() => {
        fetchLeaves();
    }, []);

    const handleStatusChange = (leaveId, newStatus) => {
        setStatusUpdates(prev => ({
            ...prev,
            [leaveId]: newStatus
        }));
    };

    const handleConfirm = async (leaveId) => {
        const selectedStatus = statusUpdates[leaveId];
        if (!selectedStatus) {
            toast.error("Please select a status first");
            return;
        }

        try {
            await axios.put(`http://localhost:8080/api/leave/update/${leaveId}`, {
                status: selectedStatus
            });
            toast.success("Status updated successfully");
            fetchLeaves(); // Refresh data
        } catch (err) {
            console.error(err);
            toast.error("Failed to update status");
        }
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="mb-4 text-2xl font-bold">Leave Requests (Department: {department})</h1>

            {leaves.length === 0 ? (
                <p className="text-gray-600">No leave applications found.</p>
            ) : (
                <div className="space-y-4">
                    {leaves.map(leave => (
                        <div
                            key={leave._id}
                            className="p-4 bg-white border border-gray-200 rounded-lg shadow-md"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className="font-semibold">title: {leave.title}</p>
                                    <p className="font-semibold">Employee ID: {leave.employeeId}</p>
                                    <p className="text-sm text-gray-600">Date: {new Date(leave.date).toLocaleDateString()}</p>
                                    <p className="text-sm text-gray-600">Current Status:
                                        <span className={`ml-2 font-semibold ${leave.status === "Rejected" ? "text-red-500" : leave.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>
                                            {leave.status}
                                        </span>
                                    </p>
                                </div>
                                <button className="text-blue-600 hover:underline">View More</button>
                            </div>

                            <div className="flex items-center mt-2 space-x-4">
                                <select
                                    className="p-2 border border-gray-300 rounded"
                                    onChange={(e) => handleStatusChange(leave._id, e.target.value)}
                                    value={statusUpdates[leave._id] || ''}
                                >
                                    <option value="">Change Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Rejected">Rejected</option>
                                </select>

                                <button
                                    className="px-4 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                                    onClick={() => handleConfirm(leave._id)}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManagerLeavePage;
