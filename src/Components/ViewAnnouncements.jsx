import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Model from "../model";

const ViewAnnouncements = () => {
  const navigate = useNavigate()
  const { role } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [portal, setPortal] = useState(false)

  const handleClick = () => {
    navigate('/CreateAnnouncement')
  }

  const handleNavigate = () => {
    navigate('/CreateAnnouncement')
  }
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/announcement/${role}`);
        setAnnouncements(res.data.result);
      } catch (err) {
        console.error("Error fetching announcements:", err);
        alert("Failed to load announcements.");
      }
    };

    fetchAnnouncements();
  }, [role]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-6 text-3xl font-bold text-center text-purple-700">
        Announcements for {role}
      </h2>

      {announcements.length === 0 ? (
        <p className="text-center text-gray-500">No announcements found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((item) => (

            <div
              key={item._id}
              className="p-4 bg-white border-t-4 border-purple-500 rounded shadow"
            >
              <button className="py-0.5 px-5 text-white rounded text-sm bg-purple-400 hover:rounded-lg border-pink-300 border-solid ml-[85%]" onClick={() => { setSelectedAnnouncement(item); setPortal(true) }}>View</button>
              <h3 className="text-lg font-bold text-gray-800">Title: {item.title}</h3>
              <p className="mt-2 text-sm text-gray-600"> Massage: {item.massage}</p>
              {role === "HR" && (<p className="mt-2 text-sm text-purple-600">
                Target: {item.targate}
              </p>)}
              <p className="mt-1 text-xs text-gray-400">
                Date: {new Date(item.date).toLocaleString()}
              </p>
              {portal && selectedAnnouncement && (
                <Model onClose={() => {
                  setPortal(false);
                  setSelectedAnnouncement(null);
                }}>
                  <div className="m-5">
                    <h1 className="mb-2 text-3xl font-bold text-gray-800">Title: {selectedAnnouncement.title}</h1>
                    <hr />
                    <p className="mt-2 text-sm text-gray-600">Message: {selectedAnnouncement.massage}</p>
                    <div className="fixed bottom-0 flex justify-between px-1 mb-2 bg-gray-200 w-[94%]">
                      <p className="font-bold text-black-600 text-md">
                        Target: {selectedAnnouncement.targate}
                      </p>
                      <p className="mt-1 text-lg text-gray-400 ">
                        Date: {new Date(selectedAnnouncement.date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Model>
              )}
            </div>
          ))}
        </div>
      )}
      {role === "HR" && (
        <button onClick={handleNavigate} className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Add Announcement</button>

      )}
    </div>
  );
};

export default ViewAnnouncements;
