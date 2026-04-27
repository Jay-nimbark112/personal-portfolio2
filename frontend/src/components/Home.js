import jayImg from '../assets/jay12.png';
import './Home.css';
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function Home({ darkMode }) {
  const cardRef = useRef();
  const [launch, setLaunch] = useState(false);
  const [explode, setExplode] = useState(false);

  // 🖱️ Mouse Move (3D Tilt + Glare)
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = ((midY - y) / midY) * 8;

    // 🎯 Tilt
    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;

    // ✨ Glare
    const glare = card.querySelector(".glare");

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    glare.style.background = `
      radial-gradient(
        circle at ${percentX * 100}% ${percentY * 100}%,
        rgba(255,255,255,0.25),
        rgba(255,255,255,0.1) 20%,
        transparent 60%
      )
    `;
  };

  // 🧼 Reset
  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";

    const glare = card.querySelector(".glare");
    glare.style.background = "none";
  };
  

  // 🚀 Button Click
  const handleHireClick = () => {
    setLaunch(true);

    setTimeout(() => {
      window.open("https://wa.me/917778880049", "_blank"); // 👈 CHANGE NUMBER
      setLaunch(false);
    }, 1000);
  };

  return (
    <section
      id="home"
      className={`container ${darkMode ? "text-white" : "text-dark"}`}
      style={{ minHeight: "100vh", paddingTop: "100px" }}
    >
      <div className="row align-items-center">

        {/* LEFT TEXT */}
        <div className="col-lg-6">
          <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
            Hy! I Am
          </h1>

          <h1 style={{ fontSize: "3.8rem", color: "#7ec8f5" }}>
            Jay Nimbark
          </h1>

          <p
            className={`${darkMode ? "text-light" : "text-muted"}`}
            style={{ maxWidth: "500px" }}
          >
            Full Stack AI Developer with expertise in MERN stack and modern web
            technologies, building scalable, intelligent, and high-performance web
            applications.
          </p>

          {/* 🚀 Button */}
          <div className="rocket-container">
            <button
              onClick={handleHireClick}
              className="btn btn-primary px-4 py-2 rounded-pill mt-3"
            >
              Hire Me 🚀
            </button>

        {launch && (
  <motion.div
    className="rocket-wrapper"
 initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
animate={{
  x: [0, 50, 200, 600],
  y: [0, -50, -300, -900],
  scale: [1, 1, 0.8, 0.5],
  opacity: [1, 1, 1, 0]
}}
transition={{
  duration: 1.1,
  times: [0, 0.1, 0.4, 1],
  ease: "easeOut"
}}
    onAnimationComplete={() => {
      window.open("https://wa.me/917778880049", "_blank");
      setLaunch(false);
    }}
  >
    <div className="rocket-trail"></div>
    <div className="rocket">🚀</div>

    {[...Array(8)].map((_, i) => (
      <span key={i} className={`particle p${i}`}></span>
    ))}
  </motion.div>
)}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
          <div className="hero-image-wrapper">
            <div className="image-glow"></div>

            <div
              className="image-card"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="glare"></div>
              <div className="shine-line"></div>

              <img src={jayImg} alt="Jay" className="hero-image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}