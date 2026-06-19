import { useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import "./SellDashboard.css";

function SellDashboard() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    condition: "",
    location: "",
    image: null,
  });

  const handleChange = (e) => {

    if (e.target.name === "image") {

      setFormData({
        ...formData,
        image: e.target.files[0],
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    }
  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("condition", formData.condition);
      data.append("location", formData.location);
      data.append("image", formData.image);

      const res = await API.post(

        "/items",

        data,

        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }

      );

      console.log(res.data);

      alert("Item Added Successfully");

    } catch (err) {

      console.log(err);

      alert("Failed to Add Item");

    }
  };

  return (

    <div className="sell-dashboard">

      <Navbar />

      <div className="sell-container">

        <h1>Sell Your Item</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
          <select
            name="category"
            onChange={handleChange}
          >

            <option value="">
              Select Category
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
              Cycle
            </option>

            <option value="hostel">
              Hostel Essentials
            </option>

          </select>

          <select
            name="condition"
            onChange={handleChange}
          >

            <option value="">
              Select Condition
            </option>

            <option value="new">
              New
            </option>

            <option value="like_new">
              Like New
            </option>

            <option value="used">
              Used
            </option>

            <option value="poor">
              Poor
            </option>

          </select>
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">
            Add Item
          </button>

        </form>

      </div>

    </div>
  );
}

export default SellDashboard;