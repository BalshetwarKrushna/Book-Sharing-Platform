import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import ItemCard from "../components/ItemCard/ItemCard";

import "./Marketplace.css";

function Marketplace() {

  const [items, setItems] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [loading, setLoading] =
    useState(true);


  // 📥 GET ITEMS

  const getItems = async () => {

    try {

      const res = await API.get(

        `/items?search=${search}&category=${category}&location=${location}`

      );

      setItems(res.data.items);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }
  };


  useEffect(() => {

    getItems();

  }, [search, category, location]);


  return (

    <div className="marketplace-page">

      <Navbar />


      {/* HERO */}

      <div className="marketplace-hero">

        <h1>
          Explore Marketplace
        </h1>

        <p>
          Buy and sell student essentials
          within your campus community.
        </p>

      </div>


      {/* SEARCH + FILTERS */}

      <div className="marketplace-top">

        <input
          type="text"
          placeholder="Search books, laptops, notes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="">
            All Categories
          </option>

          <option value="book">
            Books
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="notes">
            Notes
          </option>

          <option value="cycle">
            Cycles
          </option>

          <option value="hostel">
            Hostel Essentials
          </option>

        </select>


        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

      </div>


      {/* CATEGORY SECTION */}

      <div className="category-section">

        <div
          className="category-card"
          onClick={() =>
            setCategory("book")
          }
        >
          📚 Books
        </div>

        <div
          className="category-card"
          onClick={() =>
            setCategory("electronics")
          }
        >
          💻 Electronics
        </div>

        <div
          className="category-card"
          onClick={() =>
            setCategory("notes")
          }
        >
          📝 Notes
        </div>

        <div
          className="category-card"
          onClick={() =>
            setCategory("cycle")
          }
        >
          🚲 Cycles
        </div>

        <div
          className="category-card"
          onClick={() =>
            setCategory("hostel")
          }
        >
          🛏 Hostel
        </div>

      </div>


      {/* ITEMS */}

      <div className="marketplace-container">

        {loading ? (

          <h1>Loading...</h1>

        ) : items.length === 0 ? (

          <div className="empty-state">

            <h2>
              No Items Found
            </h2>

          </div>

        ) : (

          <div className="marketplace-grid">

            {items.map((item) => (

              <ItemCard
                key={item._id}
                item={item}
              />

            ))}

          </div>

        )}

      </div>

    </div>

  );
}

export default Marketplace;