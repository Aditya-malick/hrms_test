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
      alert("Department added successfully");
      setFormData({
        dName: "",
        dId: "",
        maneger: "",
        description: ""
      });
    } catch (err) {
      console.error("Error adding department:", err);
      alert("Something went wrong while adding department.");
    } ``
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center ">
        <div className=" relative inset-0 z-0 bg-gradient-to-r from-purple-300 via-bg-red-700 to-bg-pink-500 opacity-70 blur-2xl"></div>

        <div className="flex top-0 shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between m-6 bg-[#F9F9F9] bg-opacity-30 p-6 w-[90%] m-4">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, Maneger</h1>
          <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 border border-gray-600">Logout</button>
        </div>
        <div className="flex w-[90%] p-4 bg-slate-400">
          <div className="bg-red-300 w-[50%]">
            
          </div>
          <div className=" p-6   bg-white rounded-lg shadow-xl w-[50%]">

            <h2 className="mb-6 text-2xl font-bold text-center text-blue-700">Add Department</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sh">
              <label htmlFor="dName">Department Name</label>
              <input
                type="text"
                name="dName"
                placeholder="Department Name"
                className="input-style border-2 border-gray-400 rounded-md p-2  shadow-inner shadow-blue-900 shadow-x"
                value={formData.dName}
                onChange={handleChange}
                required
              />
              <label htmlFor="dId">Department ID</label>
              <input
                type="text"
                name="dId"
                placeholder="Department ID"
                className="input-style border-2 border-gray-400 rounded-md p-2 shadow-inner shadow-blue-900 shadow-x"
                value={formData.dId}
                onChange={handleChange}
                required
              />
              <label htmlFor="maneger">Manager Name or ID</label>
              <input
                type="text"
                name="maneger"
                placeholder="Manager Name or ID"
                className="input-style border-2 border-gray-400 rounded-md p-2 shadow-inner shadow-blue-900 shadow-x"
                value={formData.maneger}
                onChange={handleChange}
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                className="input-style border-2 border-gray-400 rounded-md p-2 shadow-inner shadow-blue-900 shadow-x  "
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="py-2 text-white bg-blue-600 rounded hover:bg-blue  bg-gradient-to-r from-black via-purple-600 to-red-500 animate-gradient"
              >
                Add Department
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default AddDepartmentForm;
