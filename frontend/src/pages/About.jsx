import Navbar from "../components/Navbar";

import "./About.css";

function About() {

  return (

    <div className="about-page">

      <Navbar />

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-hero-left">

          <h1>
            About <span>CampusMart</span>
          </h1>

          <p>
            CampusMart is a student marketplace
            designed to help college students buy,
            sell and exchange books, electronics,
            notes and essentials within their campus
            community.
          </p>

        </div>

        <div className="about-hero-right">

          <img
            src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-1456.jpg"
            alt="students"
          />

        </div>

      </section>


      {/* MISSION */}

      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          We aim to create a trusted and affordable
          marketplace for students where unused items
          can find new owners instead of being wasted.
          CampusMart helps students save money and
          build stronger campus communities.
        </p>

      </section>


      {/* FEATURES */}

      <section className="features-section">

        <h2>Why Choose CampusMart?</h2>

        <div className="features-grid">

          <div className="feature-card">

            <h3>Trusted Students</h3>

            <p>
              Buy and sell only within verified
              student communities.
            </p>

          </div>

          <div className="feature-card">

            <h3>Affordable Prices</h3>

            <p>
              Get books and essentials at student
              friendly prices.
            </p>

          </div>

          <div className="feature-card">

            <h3>Easy Exchange</h3>

            <p>
              Simple and secure buying and selling
              experience.
            </p>

          </div>

          <div className="feature-card">

            <h3>Eco Friendly</h3>

            <p>
              Reuse products and reduce unnecessary
              waste.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <section className="about-footer">

        <h2>
          Join CampusMart Today
        </h2>

        <p>
          Start exploring the marketplace and
          connect with students around you.
        </p>

      </section>

    </div>

  );
}

export default About;