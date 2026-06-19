import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import "./Wishlist.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  const [loading, setLoading] = useState(true);

  // Fetch wishlist

  const getWishlist = async () => {

    try {

      const res = await API.get(
        "/wishlist"
      );

      setWishlist(res.data.wishlist);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }
  };

  // Remove item

  const removeItem = async (id) => {

    try {

      await API.delete(
        `/wishlist/${id}`
      );

      alert("Removed from wishlist");

      getWishlist();

    } catch (err) {

      console.log(err);

      alert("Failed to remove");

    }
  };

  useEffect(() => {

    getWishlist();

  }, []);

  return (

    <div className="wishlist-page">

      <Navbar />

      <div className="wishlist-container">

        <h1>My Wishlist</h1>

        <p>
          Your saved marketplace items.
        </p>

        {loading ? (

          <h2>Loading...</h2>

        ) : wishlist.length === 0 ? (

          <div className="empty-wishlist">

            <h2>No Wishlist Items</h2>

          </div>

        ) : (

          <div className="wishlist-grid">

            {wishlist.map((wish) => (

              <div
                className="wishlist-card"
                key={wish._id}
              >

                <img
                  src={wish.itemId?.image}
                  alt={wish.itemId?.title}
                />

                <div className="wishlist-info">

                  <h2>
                    {wish.itemId?.title}
                  </h2>

                  <p className="price">
                    ₹ {wish.itemId?.price}
                  </p>

                  <p>
                    {wish.itemId?.location}
                  </p>

                  <button
                    onClick={() =>
                      removeItem(wish._id)
                    }
                  >
                    Remove
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

export default Wishlist;