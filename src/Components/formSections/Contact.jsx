import React from 'react';

const ContactDetails = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <input
          type="text"
          value={formData.mobileNumber}
          onChange={(e) => setFormData({ ...formData,  mobileNumber: e.target.value })}
          className="mt-1 w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Alternate Number</label>
        <input
          type="text"
          value={formData.alternateNumber}
          onChange={(e) => setFormData({ ...formData, alternateNumber: e.target.value })}
          className="mt-1 w-full border px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData,  email: e.target.value })}
          className="mt-1 w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Address</label>
        <input
          type="text"
          value={formData.currentAddress}
          onChange={(e) => setFormData({ ...formData,  currentAddress: e.target.value })}
          className="mt-1 w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
        <input
          type="text"
          value={formData.permanentAddress}
          onChange={(e) => setFormData({ ...formData,  permanentAddress: e.target.value })}
          className="mt-1 w-full border px-3 py-2 rounded-md"
          required
        />
      </div>
    </div>
  );
};

export default ContactDetails;
