import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserTie } from "react-icons/fa";
import { Navigate, useNavigate, useParams } from "react-router-dom"; 

const EmployeeList = () => {
  const Navigate = useNavigate()
  const { departmentName } = useParams(); 
  const [employees, setEmployees] = useState([]);
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/${departmentName}`) 
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, [departmentName]); 

  return (
    <div className="min-h-screen p-6 bg-gray-100">
       <div className="absolute relative inset-0 z-0 bg-gradient-to-r from-purple-300 via-bg-red-700 to-bg-pink-500 opacity-70 blur-2xl"></div> 
      {/* Header Section */}
      <div className="fixed w-[96.5%]  flex shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between mb-6 bg-[#F9F9F9] bg-opacity-30 p-6 ">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, HR</h1>
        <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Logout</button>
      </div>
      <h1 className="mb-6 text-3xl font-bold text-center text-purple-700 mt-[120px]">
        Employees in {departmentName} Department
      </h1>
      <>
        {employees.length === 0 ? (
          <p className="text-center text-gray-500">No employees found.</p>
        ) : (
          <div className="mt-4">
            {employees.map((emp) => (
              <div
                key={emp._id}
                className="flex items-center justify-between gap-4 p-5 m-5 border-t-4 border-indigo-500 rounded-lg shadow-md"
              >
                <FaUserTie className="text-3xl text-indigo-600 " />
                <div className="flex items-center justify-center h-4 gap-10">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {emp.firstName} {emp.lastName}
                  </h2>
                  <p className="text-sm text-gray-600">Employee ID: {emp.employeeId}</p>
                  <p className="text-sm text-gray-600">Role: {emp.role}</p>

                  <p className="text-sm text-gray-600">Status: {emp.status}</p>
                </div>
                <button
                  onClick={() => Navigate(`/EmployeeDetails/${emp.employeeId}`)}
                className="p-4 text-white bg-purple-500 rounded-md shadow-xl">Details</button>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default EmployeeList;
