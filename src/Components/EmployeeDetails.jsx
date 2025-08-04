import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmployeeDetails = () => {
  const [user, setUser] = useState(" ")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { id } = useParams();
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/employee/id/${id}`);
      setUser(res.data);
    } catch (err) {
      console.log("Error fetching profile:", err);
      setError("Could not load profile.");
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, [id]);


  if (loading) return <div className="mt-10 text-lg text-center text-gray-500">Loading employee profile...</div>;
  if (error) return <div className="mt-10 text-center text-red-600">{error}</div>;


  return (
    <div className="max-w-6xl p-6 mx-auto mt-8 bg-white shadow-lg rounded-xl">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Employee Profile</h1>

      {/* Personal Info */}
      <div className="mb-6">
        <h2 className="pb-1 mb-2 text-xl font-semibold text-blue-700 border-b">👤Personal Information</h2>
        <table className="min-w-full text-sm border">
          <tbody>
            <tr className="border-t">
              <td className="w-1/3 px-4 py-2 font-medium bg-gray-50">Employee ID</td>
              <td className="px-4 py-2 text-black">{user.employeeId}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Name</td>
              <td className="px-4 py-2">{user.firstName} {user.lastName}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Date of Birth</td>
              <td className="px-4 py-2">{new Date(user.dob).toLocaleDateString()}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Gender</td>
              <td className="px-4 py-2">{user.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <h2 className="pb-1 mb-2 text-xl font-semibold text-blue-700 border-b"> Contact Information</h2>
        <table className="min-w-full text-sm border">
          <tbody>
            <tr className="border-t">
              <td className="w-1/3 px-4 py-2 font-medium bg-gray-50">Email</td>
              <td className="px-4 py-2">{user.contact?.email || 'AN'}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Phone</td>
              <td className="px-4 py-2">{user.contact?.phone   || 'AN'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Job Details */}
      <div className="mb-6">
        <h2 className="pb-1 mb-2 text-xl font-semibold text-blue-700 border-b"> Job Details</h2>
        <table className="min-w-full text-sm border">
          <tbody>
            <tr className="border-t">
              <td className="w-1/3 px-4 py-2 font-medium bg-gray-50">Role</td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Department</td>
              <td className="px-4 py-2">{user.jobDetails?.department}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Designation</td>
              <td className="px-4 py-2">{user.jobDetails?.designation}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Joining Date</td>
              <td className="px-4 py-2">{new Date(user.jobDetails?.joiningDate).toLocaleDateString()}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Manager ID</td>
              <td className="px-4 py-2">{user.jobDetails?.managerId}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Salary Details */}
      <div className="mb-6">
        <h2 className="pb-1 mb-2 text-xl font-semibold text-blue-700 border-b"> Salary Details</h2>
        <table className="min-w-full text-sm border">
          <tbody>
            <tr className="border-t">
              <td className="w-1/3 px-4 py-2 font-medium bg-gray-50">Base</td>
              <td className="px-4 py-2">₹{user.salaryDetails?.base}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Allowances</td>
              <td className="px-4 py-2">₹{user.salaryDetails?.allowances}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium bg-gray-50">Deductions</td>
              <td className="px-4 py-2">₹{user.salaryDetails?.deductions}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Status */}
      <div className="mb-6">
        <h2 className="pb-1 mb-2 text-xl font-semibold text-blue-700 border-b"> Status</h2>
        <div className="px-4 py-2 text-sm bg-gray-100 rounded">{user.status}</div>
      </div>

      {/* Documents */}
      <div>
        <h2 className="pb-1 mb-2 text-xl font-semibold text-blue-700 border-b"> Documents</h2>
        {user.documents?.length > 0 ? (
          <ul className="pl-5 space-y-1 text-sm text-blue-600 list-disc">
            {user.documents.map((doc, i) => (
              <li key={i}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {doc.name}
                </a>{" "}
                <span className="text-xs text-gray-500">(Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">No documents uploaded.</p>
        )}
      </div>
    </div>
  )
}

export default EmployeeDetails