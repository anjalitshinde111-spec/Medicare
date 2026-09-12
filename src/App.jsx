import React, { useState } from "react";
import "./App.css";

const doctors = [
  {
    name: "Dr. Ananya Sharma",
    specialty: "Cardiologist",
    experience: "12 Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dr. Rahul Patil",
    specialty: "Neurologist",
    experience: "10 Years Experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dr. Priya Deshmukh",
    specialty: "Pediatrician",
    experience: "8 Years Experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
  },
];

const services = [
  "24/7 Emergency Care",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "General Medicine",
  "Diagnostic Laboratory",
];

const serviceImages = [
  "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=85",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-icon">✚</span>
            MediCare
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#doctors" onClick={() => setMenuOpen(false)}>Doctors</a>
            <a href="#appointment" onClick={() => setMenuOpen(false)}>
              Appointment
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a href="#appointment" className="nav-appointment">
            Book Appointment
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-content">

          <div className="hero-text">
            <span className="badge">
              Trusted Healthcare Since 2005
            </span>

            <h1>
              Your Health Is Our
              <span> First Priority</span>
            </h1>

            <p>
              We provide quality healthcare with experienced doctors,
              advanced technology, and compassionate care for you and your
              family.
            </p>

            <div className="hero-buttons">
              <a href="#appointment" className="btn primary">
                Book an Appointment
              </a>

              <a href="#services" className="btn secondary">
                Explore Services
              </a>
            </div>

            <div className="hero-info">
              <div>
                <strong>20+</strong>
                <small>Departments</small>
              </div>

              <div>
                <strong>50+</strong>
                <small>Expert Doctors</small>
              </div>

              <div>
                <strong>25K+</strong>
                <small>Happy Patients</small>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="doctor-image">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
                alt="MediCare Healthcare"
              />

              <div className="image-badge">
                ✓ Trusted Medical Care
              </div>
            </div>

            <div className="emergency-card">
              <div className="emergency-icon">☎</div>

              <div>
                <small>Emergency Helpline</small>
                <strong>1800-123-4567</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container about-grid">

          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85"
              alt="Modern Hospital"
            />

            <div className="about-box">
              <span>✚</span>
              <h3>20+ Years</h3>
              <p>of trusted healthcare</p>
            </div>
          </div>

          <div className="about-text">
            <span className="section-label">
              About MediCare
            </span>

            <h2>Healthcare You Can Trust</h2>

            <p>
              MediCare Hospital is committed to delivering exceptional
              healthcare services with a patient-first approach.
            </p>

            <p>
              Our team of experienced medical professionals works together
              to provide accurate diagnosis, effective treatment, and
              personalized care.
            </p>

            <div className="check-list">
              <div>✓ Experienced & Qualified Doctors</div>
              <div>✓ Modern Medical Equipment</div>
              <div>✓ 24/7 Emergency Services</div>
              <div>✓ Patient-Centered Care</div>
            </div>

            <a href="#contact" className="btn primary">
              Learn More
            </a>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="section light-section">
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              Our Services
            </span>

            <h2>Complete Healthcare Under One Roof</h2>

            <p>
              Advanced medical services delivered by our expert healthcare
              professionals.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service-card" key={service}>

                <div className="service-image">
                  <img
                    src={serviceImages[index]}
                    alt={service}
                  />
                </div>

                <div className="service-icon">
                  {["🚑", "❤️", "🧠", "👶", "🩺", "🔬"][index]}
                </div>

                <h3>{service}</h3>

                <p>
                  Professional healthcare services with modern facilities
                  and expert medical support.
                </p>

                <a href="#appointment">
                  Learn More →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="section">
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              Our Doctors
            </span>

            <h2>Meet Our Specialists</h2>

            <p>
              Experienced doctors dedicated to providing the best care.
            </p>
          </div>

          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <div className="doctor-card" key={doctor.name}>

                <div className="doctor-photo">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                  <span className="doctor-status">
                    ● Available
                  </span>
                </div>

                <div className="doctor-details">
                  <h3>{doctor.name}</h3>

                  <p className="specialty">
                    {doctor.specialty}
                  </p>

                  <p>{doctor.experience}</p>

                  <a
                    href="#appointment"
                    className="doctor-btn"
                  >
                    Book Visit
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Appointment */}
      <section id="appointment" className="appointment-section">
        <div className="container appointment-grid">

          <div>
            <span className="section-label">
              Appointment
            </span>

            <h2>
              Take the First Step Towards Better Health
            </h2>

            <p>
              Schedule an appointment with our specialists today.
            </p>

            <div className="appointment-benefits">
              <div>✓ Easy appointment booking</div>
              <div>✓ Experienced specialists</div>
              <div>✓ Comfortable patient care</div>
            </div>
          </div>

          <form
            className="appointment-form"
            onSubmit={handleSubmit}
          >
            <h3>Book Your Appointment</h3>

            <input
              type="text"
              placeholder="Patient Name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <select required defaultValue="">
              <option value="" disabled>
                Select Department
              </option>

              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>General Medicine</option>
            </select>

            <input
              type="date"
              required
            />

            <button
              type="submit"
              className="btn primary full"
            >
              Request Appointment
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Appointment request submitted successfully!
              </div>
            )}
          </form>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              Contact Us
            </span>

            <h2>We Are Here For You</h2>
          </div>

          <div className="contact-grid">

            <div className="contact-card">
              <span>📍</span>
              <h3>Address</h3>
              <p>
                123 Healthcare Avenue, Pune, Maharashtra
              </p>
            </div>

            <div className="contact-card">
              <span>☎</span>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-card">
              <span>✉</span>
              <h3>Email</h3>
              <p>info@medicarehospital.com</p>
            </div>

            <div className="contact-card">
              <span>🕐</span>
              <h3>Opening Hours</h3>
              <p>24 Hours / 7 Days</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">

          <div>
            <a href="#home" className="logo footer-logo">
              <span className="logo-icon">✚</span>
              MediCare
            </a>

            <p>
              Quality healthcare with compassion, expertise and trust.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="copyright">
          © 2026 MediCare Hospital. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;