import "./Herosection.css";

import { useNavigate } from "react-router-dom";

function HeroSection() {

  const navigate = useNavigate();

  return (

    <section className="hero">

      <div className="hero-left">

        <p className="tag">
          Student Marketplace
        </p>

        <h1>
          Buy, Sell & Exchange
          <span> Student Essentials</span>
        </h1>

        <p className="hero-text">
          Buy and sell books, laptops,
          notes and study essentials
          within your college community.
        </p>

        <div className="hero-buttons">

          <button
            className="buy-btn"

            onClick={() =>
              navigate("/marketplace")
            }
          >
            Start Buying
          </button>

          <button
            className="sell-btn"

            onClick={() =>
              navigate("/sell-dashboard")
            }
          >
            Start Selling
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://img.freepik.com/free-photo/happy-student-with-books_23-2148502984.jpg"
          alt="student"
        />

      </div>

    </section>
  );
}

export default HeroSection;