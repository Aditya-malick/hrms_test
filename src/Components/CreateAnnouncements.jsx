import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const CreateAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    massage: "",
    targate: "All",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/announcement/create", formData);
      toast.success('Announcement created')
      setFormData({ title: "", massage: "", targate: "All" });
    } catch (err) {
      console.error("Error creating announcement:", err);
      toast.error("Something went wrong Please try again")
    }
  };

  return (
    <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 backdrop-blur-md bg-gradient-to-br from-purple-500/30 via-pink-300/30 to-blue-500/30 h-screen" />

      <div className="relative z-10 h-[20%]  ml-20  mr-20">
        <div className=" flex top-0 shadow-2xl rounded-3xl items-center border-2 border-gray-400  justify-between  bg-[#F9F9F9]  p-4 ">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">Welcome, Maneger</h1>
          <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 border border-gray-600">Logout</button>
        </div>
      </div>
      <div className=" bg-slate-500 flex items-center justify-center h-[90%] p-2   ml-20  mr-20 rounded-tl-[50px] rounded-tr-[50px] from-indigo-200 via-purple-200 via-pink-300 to-blue-200  border-slate-300 ">
     
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-5 bg-white shadow-lg shadow-black bg-opacity-50 rounded-3xl  "
        >
          <h2 className="mb-4 text-2xl font-bold text-center text-purple-700">
            Create Announcement
          </h2>

          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded opacity-50 shadow-lg shadow-black"
          />

          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="massage"
            value={formData.massage}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded opacity-50 shadow-lg shadow-black"
            rows={4}
          />

          <label className="block mb-2 font-medium">Target Audience</label>
          <select
            name="targate"
            value={formData.targate}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded opacity-50 shadow-lg shadow-black"
          >
            <option value="All">All</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
          </select>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-purple-600 rounded hover:bg-purple-700 bg-gradient-to-r from-black via-purple-600 to-red-500 animate-gradient"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
