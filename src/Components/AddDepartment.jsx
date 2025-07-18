import React, { useState } from "react";
import axios from "axios";

const AddDepartmentForm = () => {
  const [formData, setFormData] = useState({
    dName: "",
    dId: "",
    maneger: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/departments/create", formData);
      alert("✅ Department added successfully");
      setFormData({
        dName: "",
        dId: "",
        maneger: "",
        description: ""
      });
    } catch (err) {
      console.error("❌ Error adding department:", err);
      alert("Something went wrong while adding department.");
    }``
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center text-blue-700">Add Department</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="dName"
          placeholder="Department Name"
          className="input-style"
          value={formData.dName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dId"
          placeholder="Department ID"
          className="input-style"
          value={formData.dId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="maneger"
          placeholder="Manager Name or ID"
          className="input-style"
          value={formData.maneger}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="input-style"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartmentForm;
