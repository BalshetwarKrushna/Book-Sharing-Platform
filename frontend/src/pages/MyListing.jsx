import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import "./MyListing.css";

function MyListings() {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  // Fetch seller items

  const getMyItems = async () => {

    try {

      const res = await API.get(
        "/items/my-items"
      );

      setItems(res.data.items);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }
  };

  // Delete item

  const deleteItem = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this item?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/items/${id}`
      );

      alert("Item Deleted");

      getMyItems();

    } catch (err) {

      console.log(err);

      alert("Failed to delete item");

    }
  };

  useEffect(() => {

    getMyItems();

  }, []);

  return (

    <div className="my-listings-page">

      <Navbar />

      <div className="my-listings-container">

        <h1>My Listings</h1>

        <p>
          Manage your uploaded marketplace items.
        </p>

        {loading ? (

          <h2>Loading...</h2>

        ) : items.length === 0 ? (

          <div className="empty-listings">

            <h2>No Items Uploaded Yet</h2>

          </div>

        ) : (

          <div className="listings-grid">

            {items.map((item) => (

              <div
                className="listing-card"
                key={item._id}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="listing-info">

                  <h2>{item.title}</h2>

                  <p className="price">
                    ₹ {item.price}
                  </p>

                  <p>
                    {item.category}
                  </p>

                  <p>
                    {item.location}
                  </p>

                  <div className="status">
                    {item.status}
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteItem(item._id)
                    }
                  >
                    Delete Item
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
}

export default MyListings;