import "./Navbar.css";

export function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-4 ${
        darkMode ? "navbar-dark bg-black" : "navbar-light bg-white"
      }`}
      style={{ height: "70px" }}
    >
      <div className="container">

        {/* LOGO + TOGGLE */}
        <div className="d-flex align-items-center gap-3">
          <a
            className={`navbar-brand fw-bold fs-4 m-0 ${
              darkMode ? "text-light" : "text-dark"
            }`}
            href="#home"
          >
            JAY
          </a>

          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <span className="track">
              <span className="icon sun">☀️</span>
              <span className="icon moon">🌙</span>
              <span className="thumb"></span>
            </span>
          </label>
        </div>

        {/* HAMBURGER BUTTON (BOOTSTRAP) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
      <div className="collapse navbar-collapse" id="navbarNav">

  <div className="ms-auto d-flex flex-column flex-lg-row align-items-center align-items-lg-center justify-content-center justify-content-lg-end gap-3 py-3 py-lg-0">

    <a className="nav-link" href="#home">Home</a>
    <a className="nav-link" href="#services">Services</a>
    <a className="nav-link" href="#experience">Experience</a>
    <a className="nav-link" href="#portfolio">Portfolio</a>
    <a className="nav-link" href="#testimonial">Testimonial</a>

    {/* CONTACT BUTTON */}
    <a
      href="#contact"
      className="btn btn-primary rounded-pill px-4 cont mx-auto mx-lg-0"
    >
      Contact
    </a>

  </div>

</div>

      </div>
    </nav>
  );
}