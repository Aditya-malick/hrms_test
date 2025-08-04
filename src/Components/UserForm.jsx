import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import PersonalInfo from "./formSections/PersonalInfo";
import EducationDetails from "./formSections/Education";
import ContactInfo from "./formSections/Contact";
import ExperienceDetails from "./formSections/Experience";
import JobDetails from "./formSections/Jobdetails";
import SalaryDetails from "./formSections/SalaryDetails";
import SystemInfo from "./formSections/SystemInfo";
import DocumentUpload from "./formSections/Doccuments";

const CreateUserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Personal Info
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      bloodGroup: "",
      maritalStatus: "",
      nationality: "",
      religion: "",
      fatherName: "",
      aadhaarNumber: "",
      panNumber: "",

    // 2. Contact Details
      mobileNumber: "",
      alternateNumber: "",
      email: "",
      currentAddress: "",
      permanentAddress: "",

    // 3. Educational Qualifications
      highestQualification: "",
      yearOfPassing: "",
      institute: "",
      stream: "",
      grade: "",
      
  
    // 4. Work Experience
      previousEmployer: "",
      designation: "",
      from: "",
      to: "",
      totalExperience: "",
      reasonForLeaving: "",
      skillsUsed: [],
  
    // 5. Job Details (Current)
      department: "",
      designation: "",
      employeeType: "",
      status: "",
      employeeId: "",
      employeePassword: "",
      officialEmail: "",
      joiningDate: "",
      reportingManager: "",
      workLocation: "",
  
    // 6. Salary / CTC Details
      gross: "",
      basic: "",
      hra: "",
      otherAllowances: "",
      bonuses: "",
      pf: "",
      esic: "",
      netPay: "",
      bankDetails: {
        accountNumber: "",
        ifsc: "",
        bankName: "",
      },
      uan: "",
      paymentMode: "",
  
    // 7. Document Uploads (URLs or Base64 or file reference keys)
      resume: "",
      photo: "",
      aadhaar: "",
      pan: "",
      academicCertificates: [],
      experienceLetters: [],
      offerRelievingLetters: [],
      bankPassbook: "",
      otherDocuments: [String],
  
    // 8. System Info (Optional - for IT)
      laptopSerial: "",
      emailAccess: "",
      githubAccess: "",
      portalCredentialsGiven: "",
  });

  const [page, setPage] = useState(0);

  const FormTitles = [
    "Personal Information",
    "Education Details",
    "Contact Information",
    "Experience Details",
    "Job Details",
    "Salary Details",
    "System Info",
    "Document Uploads",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <EducationDetails formData={formData} setFormData={setFormData} />;
      case 2:
        return <ContactInfo formData={formData} />; // Read-only review page
      case 3:
        return <ExperienceDetails formData={formData} />; // Read-only review p
      case 4:
        return <JobDetails formData={formData} setFormData={setFormData} />;
      case 5:
        return <SalaryDetails formData={formData} setFormData={setFormData} />;
      case 6:
        return <SystemInfo formData={formData} setFormData={setFormData} />;
      case 7:
        return <DocumentUpload formData={formData} setFormData={setFormData} />;
      default:
        return <div>Unknown Page</div>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/users/create", formData);

      if (res.status === 200 || res.status === 201) {
        alert("User created successfully!");
        navigate("/user-list"); // navigate to user list or dashboard
      } else {
        alert(res.data.message || "Error creating user");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-10 flex justify-center items-center overflow-y-clip">

    <div className="w-[90%] p-5 bg-purple-400 rounded-tr-2xl rounded-tl-2xl overflow-y-clip ">
      <div className="m-3 h-5 bg-white rounded-lg  p-1">
        <div
          style={{
            width: `${((page + 1) / FormTitles.length) * 100}%`,
            height: "100%",
            background: "#3b82f6",
            transition: "width 0.3s",
          }}
          className="rounded-lg"
        />
      </div>

      <div className="form-container">
        <div className="m-4">
          <h1 className="text-2xl font-bold text-center ">{FormTitles[page]}</h1>
        </div>

        <form className="body overflow-y-hidden space-y-4" onSubmit={handleSubmit}>

          <div>
            {PageDisplay()}
          </div>

          <div className="footer flex justify-between mt-4">

            <button
              disabled={page === 0}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              onClick={(e) => {
                e.preventDefault();
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>

            {page === FormTitles.length - 1 ? (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Submit
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CreateUserForm;
