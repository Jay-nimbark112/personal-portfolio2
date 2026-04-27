import { useState } from "react";
import axios from "axios";

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import "./Contact.css";

export function Contact({ darkMode }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // input handler
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const[success,setSuccess] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/contact",
      form
    );

    setSuccess("✅ Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSuccess(""), 3000); // auto hide
  } catch (err) {
    setSuccess("❌ Failed to send message");
    setTimeout(() => setSuccess(""), 3000);
  }
};

  


  return (
    <section id="contact" className={`contact-section py-5 ${darkMode ? "dark" : "light"}`}>
      <div className="container">

        <h2 className="text-center fw-bold mb-5 section-title text-white">
          Get In Touch
        </h2>

        <div className="row g-4 justify-content-center">

          {/* LEFT SIDE */}
          <div className="col-md-5">
            <div className="contact-info-card">
              <h4 className="fw-bold mb-4">Let's Connect</h4>

              <div className="info-item mb-3">
                <FaEnvelope className="text-primary me-3" size={22} />
                <span>jaynimbark5869@email.com</span>
              </div>

              <div className="info-item mb-4">
                <FaMapMarkerAlt className="text-primary me-3" size={22} />
                <span>Gujarat, India</span>
              </div>

              <h5 className="fw-bold mb-3">Follow Me</h5>

              <div className="social-links d-flex gap-3">
                <a href="https://github.com/Jay-nimbark112" target="_blank" rel="noreferrer">
                  <FaGithub size={24} />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin size={24} />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram size={24} />
                </a>

                <a href="https://youtube.com/@jdn9717" target="_blank" rel="noreferrer">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-6">

          {success && (
  <div className="alert alert-success text-center">
    {success}
  </div>
)}

            <form className="contact-form p-4" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Email Address"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control mb-3"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <IoSend size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}