import { Link } from "react-router-dom";

import "./ItemCard.css";

function ItemCard({ item }) {

  return (

    <div className="item-card">

      {/* IMAGE */}

      <div className="item-image">

        <img
          src={item.image}
          alt={item.title}
        />

        <div className="item-status">
          {item.status}
        </div>

      </div>


      {/* CONTENT */}

      <div className="item-content">

        <h2>
          {item.title}
        </h2>

        <p className="item-price">
          ₹ {item.price}
        </p>

        <p className="item-category">
          {item.category}
        </p>

        <div className="item-details">

          <span>
            📍 {item.location}
          </span>

          <span>
            {item.condition}
          </span>

        </div>

        <div className="seller-name">

          Seller:
          {" "}
          {item.ownerId?.username}

        </div>


        {/* BUTTON */}

        <Link to={`/items/${item._id}`}>

          <button className="view-btn">
            View Details
          </button>

        </Link>

      </div>

    </div>

  );
}

export default ItemCard;