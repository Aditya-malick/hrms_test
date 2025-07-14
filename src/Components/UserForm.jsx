import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "Male",
    email: "",
    phone: "",
    role: "Employee",
    department: "",
    designation: "",
    managerId: "",
    location: "",
    password: "",
    base: "",
    allowances: "",
    deductions: "",
    status:"Active"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:8080/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("User created successfully!");

      // 🔁 Redirect based on role
      if (result.role === "HR") navigate("/HrDashboard");
      else if (result.role === "Manager") navigate("/ManagerDashboard");
      else navigate("/EmployeeDashboard");
    } else {
      alert(result.message || "Error creating user");
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Create New User</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="employeeId" placeholder="Employee ID" className="input-style" value={formData.employeeId} onChange={handleChange} />
        <input type="text" name="firstName" placeholder="First Name" className="input-style" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" className="input-style" value={formData.lastName} onChange={handleChange} />
        <input type="date" name="dob" className="input-style" value={formData.dob} onChange={handleChange} />

        <select name="gender" className="input-style" value={formData.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="email" name="email" placeholder="Email" className="input-style" value={formData.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" className="input-style" value={formData.phone} onChange={handleChange} />

        <select name="role" className="input-style" value={formData.role} onChange={handleChange}>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
        </select>

        <input type="text" name="department" placeholder="Department (ID or Name)" className="input-style" value={formData.department} onChange={handleChange} />
        <input type="text" name="designation" placeholder="Designation" className="input-style" value={formData.designation} onChange={handleChange} />

        {formData.role === "employee" && (
          <input type="text" name="managerId" placeholder="Manager ID (Optional)" className="input-style" value={formData.managerId} onChange={handleChange} />
        )}

        <input type="text" name="location" placeholder="Location / Address" className="input-style" value={formData.location} onChange={handleChange} />
        <input type="password" name="password" placeholder="Create Password" className="input-style" value={formData.password} onChange={handleChange} />
        <input type="number" name="base" placeholder="Base Salary" className="input-style" onChange={handleChange} />
        <input type="number" name="allowances" placeholder="Allowances" className="input-style" onChange={handleChange} />
        <input type="number" name="deductions" placeholder="Deductions" className="input-style" onChange={handleChange} />

        {/* Status (Optional dropdown) */}
        <select name="status" className="input-style" onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Resigned">Resigned</option>
          <option value="Terminated">Terminated</option>
        </select>

        <button type="submit" className="col-span-1 md:col-span-2 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
