import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        const id = user.employeeId;
        console.log(id)
        const res = await axios.get(`http://localhost:8080/api/employee/id/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Something went wrong while fetching the profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p className="mt-10 text-lg font-semibold text-center text-gray-600">Loading profile...</p>;
  if (error) return <p className="mt-10 font-medium text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl p-8 mx-auto my-10 bg-white shadow-2xl rounded-2xl">
      <h1 className="pb-2 mb-6 text-3xl font-bold text-gray-800 border-b"> Profile Details</h1>

      <div className="space-y-6">
        {/* Personal Info */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-indigo-700">Personal Info</h2>
          <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2">
            <p><strong>Employee ID:</strong> {user.employeeId}</p>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-indigo-700">Contact Info</h2>
          <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2">
            <p><strong>Email:</strong> {user.contact?.email || "N/A"}</p>
            <p><strong>Phone:</strong> {user.contact?.phone || "N/A"}</p>
          </div>
        </section>

        {/* Job Details */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-indigo-700">Role & Job Details</h2>
          <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2">
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Department:</strong> {user.jobDetails?.department}</p>
            <p><strong>Designation:</strong> {user.jobDetails?.designation}</p>
            <p><strong>Joining Date:</strong> {new Date(user.jobDetails?.joiningDate).toLocaleDateString()}</p>
            <p><strong>Manager ID:</strong> {user.jobDetails?.managerId}</p>
          </div>
        </section>

        {/* Salary Details */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-indigo-700">Salary Details</h2>
          <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2">
            <p><strong>Base:</strong> ₹{user.salaryDetails?.base}</p>
            <p><strong>Allowances:</strong> ₹{user.salaryDetails?.allowances}</p>
            <p><strong>Deductions:</strong> ₹{user.salaryDetails?.deductions}</p>
          </div>
        </section>

        {/* Status */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-indigo-700">Status</h2>
          <p className="text-gray-700"><strong>Current Status:</strong> {user.status}</p>
        </section>

        {/* Documents */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-indigo-700">Documents</h2>
          <ul className="text-gray-700 list-disc list-inside">
            {user.documents?.length > 0 ? (
              user.documents.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline transition hover:text-blue-800"
                  >
                    {doc.name}
                  </a>{" "}
                  (Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()})
                </li>
              ))
            ) : (
              <li>No documents uploaded.</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
