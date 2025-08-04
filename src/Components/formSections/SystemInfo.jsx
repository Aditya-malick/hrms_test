import React from 'react';

const SystemInfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <h2 className="text-xl font-semibold mb-2">System Information</h2>

      <label className="flex flex-col">
        System Assigned
        <input
          type="text"
          value={formData.systemAssigned}
          onChange={(e) =>
            setFormData({ ...formData, systemAssigned: e.target.value })
          }
          placeholder="e.g., Dell Latitude 3420"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Asset ID
        <input
          type="text"
          value={formData.assetId}
          onChange={(e) =>
            setFormData({ ...formData, assetId: e.target.value })
          }
          placeholder="Enter asset ID"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        OS Installed
        <input
          type="text"
          value={formData.osInstalled}
          onChange={(e) =>
            setFormData({ ...formData, osInstalled: e.target.value })
          }
          placeholder="e.g., Windows 11 Pro"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        System Access Level
        <select
          value={formData.accessLevel}
          onChange={(e) =>
            setFormData({ ...formData, accessLevel: e.target.value })
          }
          className="border p-2 rounded"
        >
          <option value="">Select access level</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
      </label>
    </div>
  );
};

export default SystemInfo;
