import { useState } from "react";
import "./LoginForm.css";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      // Save Token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      console.log(res.data);

      alert("Login successful");
       navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>
          Login to continue buying and selling
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="bottom-text">
          Don't have an account? <span>Sign Up</span>
        </div>

      </div>

    </div>
  );
}

export default LoginForm;