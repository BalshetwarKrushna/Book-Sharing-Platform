import Navbar from "../components/Navbar";

import "./Contact.css";

function Contact() {

  return (

    <div className="contact-page">

      <Navbar />

      {/* HERO */}

      <section className="contact-hero">

        <h1>
          Contact <span>CampusMart</span>
        </h1>

        <p>
          Have questions, feedback or support issues?
          Reach out to us anytime.
        </p>

      </section>


      {/* CONTACT CONTAINER */}

      <section className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <h2>Get In Touch</h2>

          <p>
            We are always ready to help students
            with marketplace support and queries.
          </p>

          <div className="contact-info">

            <div className="info-card">

              <h3>Email</h3>

              <p>support@campusmart.com</p>

            </div>

            <div className="info-card">

              <h3>Phone</h3>

              <p>+91 9876543210</p>

            </div>

            <div className="info-card">

              <h3>Location</h3>

              <p>Pune, Maharashtra</p>

            </div>

          </div>

        </div>


        {/* RIGHT */}

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Enter your name"
            />

            <input
              type="email"
              placeholder="Enter your email"
            />

            <textarea
              placeholder="Write your message"
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* FOOTER */}

      <section className="contact-footer">

        <h2>
          CampusMart Support Team
        </h2>

        <p>
          Helping students connect and exchange
          essentials easily.
        </p>

      </section>

    </div>

  );
}

export default Contact;