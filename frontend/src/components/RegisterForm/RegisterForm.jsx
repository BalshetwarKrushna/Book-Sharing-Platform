import { useState } from "react";
import "./RegisterForm.css";
import API from "../../api/axios";
function RegisterForm() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    location: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password check
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {

      const res = await API.post(
        "/auth/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          location: formData.location,
          phoneNumber: formData.phoneNumber
        }
      );

      console.log(res.data);

      alert("Registration successful");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="register-container">

      <div className="register-card">

        {/* LEFT SECTION */}

        <div className="register-left">

          <div className="logo">
            Campus<span>Mart</span>
          </div>

          <h1>
            Join the <span>CampusMart</span> Community
          </h1>

          <p>
            Create your account and start buying,
            selling and exchanging student essentials.
          </p>

          <img
            src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1456.jpg"
            alt="student"
          />

          <div className="features">
            <div>Safe & Secure</div>
            <div>Trusted Community</div>
            <div>Best Deals</div>
            <div>24/7 Support</div>
          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="register-right">

          <h1>Create Your Account</h1>

          <p>Sign up to get started</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Enter your full name"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Enter your college name"
              value={formData.location}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit">
              Sign Up
            </button>

          </form>

          <div className="login-link">
            Already have an account? <span>Login</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RegisterForm;