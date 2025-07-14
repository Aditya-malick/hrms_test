import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
      console.log(res.data)
      alert('Login successful!');
      localStorage.setItem('token', res.data.token);
      if(res.data.role === "HR")navigate('/HrDashboard')
      else if(res.data.role === "Manager")navigate('/ManagerDashboard')
      else navigate('/EmployeeDashboard')
        
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">HRMS Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-semibold py-2 rounded hover:bg-indigo-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
