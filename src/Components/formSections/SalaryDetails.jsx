import React from 'react';

const SalaryDetails = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <h2 className="text-xl font-semibold mb-2">Salary Details</h2>

      <label className="flex flex-col">
        Base Salary (₹)
        <input
          type="number"
          value={formData.baseSalary}
          onChange={(e) =>
            setFormData({ ...formData, baseSalary: e.target.value })
          }
          placeholder="Enter base salary"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Bonus (₹)
        <input
          type="number"
          value={formData.bonus}
          onChange={(e) =>
            setFormData({ ...formData, bonus: e.target.value })
          }
          placeholder="Enter bonus amount"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Deductions (₹)
        <input
          type="number"
          value={formData.deductions}
          onChange={(e) =>
            setFormData({ ...formData, deductions: e.target.value })
          }
          placeholder="Enter deductions"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Net Salary (₹)
        <input
          type="number"
          value={formData.netSalary}
          onChange={(e) =>
            setFormData({ ...formData, netSalary: e.target.value })
          }
          placeholder="Enter net salary"
          className="border p-2 rounded"
        />
      </label>
    </div>
  );
};

export default SalaryDetails;
