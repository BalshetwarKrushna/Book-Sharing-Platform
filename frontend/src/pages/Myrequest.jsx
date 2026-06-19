import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import "./MyRequest.css";

function MyRequests() {

  const [requests, setRequests] = useState([]);

  const [loading, setLoading] = useState(true);

  // Fetch requests

  const getRequests = async () => {

    try {

      const res = await API.get(
        "/requests/my-requests"
      );

      setRequests(res.data.requests);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }
  };

  useEffect(() => {

    getRequests();

  }, []);

  return (

    <div className="my-requests-page">

      <Navbar />

      <div className="my-requests-container">

        <h1>My Requests</h1>

        <p>
          Track all your requested items.
        </p>

        {loading ? (

          <h2>Loading...</h2>

        ) : requests.length === 0 ? (

          <div className="empty-requests">

            <h2>No Requests Sent Yet</h2>

          </div>

        ) : (

          <div className="requests-grid">

            {requests.map((request) => (

              <div
                className="request-card"
                key={request._id}
              >

                <img
                  src={request.itemId?.image}
                  alt={request.itemId?.title}
                />

                <div className="request-info">

                  <h2>
                    {request.itemId?.title}
                  </h2>

                  <p className="price">
                    ₹ {request.itemId?.price}
                  </p>

                  <p>
                    <strong>Status:</strong>
                    {" "}
                    {request.status}
                  </p>

                  <p>
                    <strong>Seller:</strong>
                    {" "}
                    {request.ownerId?.username}
                  </p>

                  {/* Show contact only if accepted */}

                  {request.status === "accepted" && (

                    <div className="contact-box">

                      <p>
                        <strong>Phone:</strong>
                        {" "}
                        {request.ownerId?.phoneNumber}
                      </p>

                      <p>
                        <strong>Location:</strong>
                        {" "}
                        {request.ownerId?.location}
                      </p>

                    </div>

                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
}

export default MyRequests;