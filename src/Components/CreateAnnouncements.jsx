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
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
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
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="massage"
          value={formData.massage}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
          rows={4}
        />

        <label className="block mb-2 font-medium">Target Audience</label>
        <select
          name="targate"
          value={formData.targate}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="All">All</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
        </select>

        <button
          type="submit"
          className="w-full py-2 text-white transition bg-purple-600 rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAnnouncement;
