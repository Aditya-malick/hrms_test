import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'

const Login = () => {
  const { setUser } = useUser()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', formData);
      const userData = res.data
      const info = {
        firstname: userData.firstName,
        employeeId: userData.employeeId,
        role: userData.role,
        department: userData.jobDetails.department
      }
      localStorage.setItem("userInfo", JSON.stringify(info))
      alert('Login successful!');
      if(res.data.role === "HR")navigate('/HrDashboard')
      else if(res.data.role === "Manager")navigate('/ManegerDashboard')
      else navigate('/EmployeeDashboard')

    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-indigo-700">HRMS Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-indigo-700 rounded hover:bg-indigo-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
