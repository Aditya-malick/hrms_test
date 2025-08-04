import React from 'react';

const JobDetails = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,  [name]: value });
  };

  return (
    <div className="space-y-6 p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-700">🏢 Job Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Software Development"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation }
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Full Stack Developer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employee Type</label>
          <select
            name="employeeType"
            value={formData.employeeType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select</option>
            <option value="Permanent">Permanent</option>
            <option value="Intern">Intern</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employment Status</label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Resigned">Resigned</option>
            <option value="Terminated">Terminated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId }
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="1001A"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Official Email ID</label>
          <input
            type="email"
            name="officialEmail"
            value={formData.officialEmail}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="sumit@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Joining</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate }
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
          <input
            type="text"
            name="reportingManager"
            value={formData.reportingManager }
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Anirudh Kushari"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Work Location</label>
          <input
            type="text"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Kolkata, WB"
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
