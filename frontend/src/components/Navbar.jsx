import "./Navbar.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  // Check login status

  const token =
    localStorage.getItem("token");

  // Logout

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
  };

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div className="logo">

        <Link
          to="/"
          className="logo-link"
        >
          Campus<span>Mart</span>
        </Link>

      </div>


      {/* NAV LINKS */}

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/marketplace">
          Marketplace
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>


      {/* BUTTONS */}

      <div className="nav-buttons">

        {token ? (

          <>

            <Link to="/wishlist">
              <button className="wishlist-btn">
                Wishlist
              </button>
            </Link>

            <button
              className="login-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        ) : (

          <>

            <Link to="/login">

              <button className="login-btn">
                Login
              </button>

            </Link>

            <Link to="/register">

              <button className="signup-btn">
                Sign Up
              </button>

            </Link>

          </>

        )}

      </div>

    </nav>

  );
}

export default Navbar;