import React from 'react';

const DocumentUpload = ({ formData, setFormData }) => {
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [field]: file });
  };

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <h2 className="text-xl font-semibold mb-2">Document Upload</h2>

      <label className="flex flex-col">
        Upload Resume
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFileChange(e, 'resume')}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Upload ID Proof (Aadhar, PAN, etc.)
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => handleFileChange(e, 'idProof')}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Upload Offer Letter (if applicable)
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(e, 'offerLetter')}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Upload Passport Photo
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(e, 'photo')}
          className="border p-2 rounded"
        />
      </label>
    </div>
  );
};

export default DocumentUpload;
