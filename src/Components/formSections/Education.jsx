import React from 'react';

const EducationDetails = ({ formData, setFormData }) => {
  
  return (
    <div className="space-y-6 p-4">

        <div className="border p-4 rounded-md shadow-sm space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) => {
                setFormData({...formData, degree: e.target.value})
              }}
              className="mt-1 w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Institution</label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => {
                setFormData({...formData, institution: e.target.value})
              }}
              className="mt-1 w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => {
                setFormData({...formData, year: e.target.value})
              }}
              className="mt-1 w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Grade</label>
            <input
              type="text"
              value={formData.grade}
              onChange={(e) => {
                setFormData({...formData, grade: e.target.value})
              }}
              className="mt-1 w-full border px-3 py-2 rounded-md"
            />
          </div>
        </div>
    </div>
)};

export default EducationDetails;
