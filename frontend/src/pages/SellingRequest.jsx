import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import "./SellingRequest.css";

function SellingRequests() {

  const [requests, setRequests] = useState([]);

  const [loading, setLoading] = useState(true);

  // Fetch requests

  const getRequests = async () => {

    try {

      const res = await API.get(
        "/requests/owner"
      );

      setRequests(res.data.requests);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }
  };

  // Accept request

  const acceptRequest = async (id) => {

    try {

      const res = await API.put(
        `/requests/${id}/accept`
      );

      console.log(res.data);

      alert("Request Accepted");

      getRequests();

    } catch (err) {

      console.log(err);

      alert("Failed to Accept");

    }
  };

  useEffect(() => {

    getRequests();

  }, []);

  return (

    <div className="selling-requests-page">

      <Navbar />

      <div className="requests-container">

        <h1>Buyer Requests</h1>

        <p>
          Manage requests from interested buyers.
        </p>

        {loading ? (

          <h2>Loading...</h2>

        ) : requests.length === 0 ? (

          <div className="empty-requests">

            <h2>No Requests Yet</h2>

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

                  <p>
                    <strong>Buyer:</strong>
                    {" "}
                    {request.buyerId?.username}
                  </p>

                  <p>
                    <strong>Email:</strong>
                    {" "}
                    {request.buyerId?.email}
                  </p>

                  <p>
                    <strong>Location:</strong>
                    {" "}
                    {request.buyerId?.location}
                  </p>

                  <p className="status">
                    {request.status}
                  </p>

                  {request.status !== "accepted" && (

                    <button
                      onClick={() =>
                        acceptRequest(request._id)
                      }
                    >
                      Accept Request
                    </button>

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

export default SellingRequests;