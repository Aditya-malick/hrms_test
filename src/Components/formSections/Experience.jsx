import React from 'react';

const ExperienceDetails = ({ formData, setFormData }) => {

  const handleChange = ( field, value) => {
    setFormData({ ...formData, [field]: value });
  };


  return (
    <div className="space-y-6 p-4">

        <div  className="border p-4 rounded-md shadow-sm space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange( 'company', e.target.value)}
              className="mt-1 w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role / Designation</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              className="mt-1 w-full border px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <input
                type="month"
                value={formData.from}
                onChange={(e) => handleChange( 'from', e.target.value)}
                className="mt-1 w-full border px-3 py-2 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <input
                type="month"
                value={formData.to}
                onChange={(e) => handleChange( 'to', e.target.value)}
                className="mt-1 w-full border px-3 py-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange( 'description', e.target.value)}
              className="mt-1 w-full border px-3 py-2 rounded-md"
              rows={3}
            />
          </div>
    </div>
    </div>
  )
};

export default ExperienceDetails;
