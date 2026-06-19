import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import "./ItemDetails.css";

function ItemDetails() {

  const { id } = useParams();

  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(true);


  // 📥 GET SINGLE ITEM

  const getItem = async () => {

    try {

      const res = await API.get(
        `/items/${id}`
      );

      setItem(res.data.item);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }
  };


  // 📨 SEND REQUEST

  const sendRequest = async () => {

    try {

      const res = await API.post(

        "/requests",

        {
          itemId: item._id
        }

      );

      console.log(res.data);

      alert(
        "Request Sent Successfully"
      );

    } catch (err) {

      console.log(err);

      alert(

        err.response?.data?.message ||

        "Failed to send request"

      );

    }
  };


  // ❤️ ADD TO WISHLIST

  const addWishlist = async () => {

    try {

      const res = await API.post(

        "/wishlist",

        {
          itemId: item._id
        }

      );

      console.log(res.data);

      alert(
        "Added to Wishlist"
      );

    } catch (err) {

      console.log(err);

      alert(

        err.response?.data?.message ||

        "Failed to add wishlist"

      );

    }
  };


  useEffect(() => {

    getItem();

  }, [id]);


  if (loading) {

    return <h1>Loading...</h1>;

  }


  if (!item) {

    return <h1>Item Not Found</h1>;

  }


  return (

    <div className="item-details-page">

      <Navbar />

      <div className="item-details-container">

        {/* LEFT */}

        <div className="item-image-section">

          <img
            src={item.image}
            alt={item.title}
          />

        </div>


        {/* RIGHT */}

        <div className="item-info-section">

          <h1>{item.title}</h1>

          <p className="price">
            ₹ {item.price}
          </p>

          <div className="status">
            {item.status}
          </div>

          <p className="description">
            {item.description}
          </p>


          <div className="details">

            <p>
              <strong>Category:</strong>
              {" "}
              {item.category}
            </p>

            <p>
              <strong>Condition:</strong>
              {" "}
              {item.condition}
            </p>

            <p>
              <strong>Location:</strong>
              {" "}
              {item.location}
            </p>

            <p>
              <strong>Seller:</strong>
              {" "}
              {item.ownerId?.username}
            </p>

          </div>


          <div className="buttons">

            <button
              className="request-btn"
              onClick={sendRequest}
            >
              Send Request
            </button>

            <button
              className="wishlist-btn"
              onClick={addWishlist}
            >
              Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ItemDetails;