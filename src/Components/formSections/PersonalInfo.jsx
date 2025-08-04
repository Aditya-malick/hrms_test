// Separate forms for each section of the employee schema using Tailwind CSS
// Example shows PersonalDetailsForm - you can follow the same structure for other sections

import React from 'react';

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    },
    );
  };

  return (
    <div className=" p-4 bg-white shadow-lg rounded-2xl">
      <div className='flex'>
        <div>
          <label className="text-xl col-span-full font-bold text-gray-800 mt-2">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-2 border rounded-xl mr-2 w-full"
          />
        </div>
        <div>
          <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-2 border rounded-xl w-full"
          />
        </div>
      </div>

      <div className='flex w-full'>
        <div className='w-[50%]'>
          <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded-xl w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='w-[50%]'>

          <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="p-2 border rounded-xl"
          />
        </div>
      </div>


      <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Blood Group</label>
      <input
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
        placeholder="Blood Group"
        className="p-2 border rounded-xl"
      />
      <select
        name="maritalStatus"
        value={formData.maritalStatus}
        onChange={handleChange}
        className="p-2 border rounded-xl"
      >
        <option value="">Marital Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
      </select>

      <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Nationality</label>
      <input
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        placeholder="Nationality"
        className="p-2 border rounded-xl"
      />

      <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Religion</label>
      <input
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        placeholder="Religion"
        className="p-2 border rounded-xl"
      />

      <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Father's Name</label>
      <input
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
        placeholder="Father's Name"
        className="p-2 border rounded-xl"
      />

      <label className="text-xl col-span-full font-bold text-gray-800 mt-2">Aadhaar Number</label>
      <input
        name="aadhaarNumber"
        value={formData.aadhaarNumber}
        onChange={handleChange}
        placeholder="Aadhaar Number"
        className="p-2 border rounded-xl"
      />

      <label className="text-xl col-span-full font-bold text-gray-800 mt-2">PAN Number</label>
      <input
        name="panNumber"
        value={formData.panNumber}
        onChange={handleChange}
        placeholder="PAN Number"
        className="p-2 border rounded-xl"
      />
    </div>
  );
}

export default PersonalDetails;

