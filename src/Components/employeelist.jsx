import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserTie } from "react-icons/fa";
import { useParams } from "react-router-dom"; // 👈 import useParams

const EmployeeList = () => {
  const { departmentName } = useParams(); // 👈 get department from URL
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/${departmentName}`) // 👈 dynamic endpoint
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, [departmentName]); // 👈 run again if departmentName changes

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-center text-purple-700">
        Employees in {departmentName} Department
      </h1>

      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No employees found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {employees.map((emp) => (
            <div
              key={emp._id}
              className="flex p-5 space-x-4 bg-white border-t-4 border-indigo-500 rounded-lg shadow-md"
            >
              <FaUserTie className="mt-1 text-3xl text-indigo-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {emp.firstName} {emp.lastName}
                </h2>
                <p className="text-sm text-gray-600">Employee ID: {emp.employeeId}</p>
                <p className="text-sm text-gray-600">Role: {emp.role}</p>
                <p className="text-sm text-gray-600">Department: {emp.jobDetails?.department}</p>
                <p className="text-sm text-gray-600">Designation: {emp.jobDetails?.designation}</p>
                <p className="text-sm text-gray-600">Email: {emp.contact?.email}</p>
                <p className="text-sm text-gray-600">Phone: {emp.contact?.phone}</p>
                <p className="text-sm text-gray-600">Location: {emp.location}</p>
                <p className="text-sm text-gray-600">Status: {emp.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
