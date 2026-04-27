import "./Testimonial.css";

export function Testimonial({ darkMode }) {
const testimonials = [
  {
    name: "Stock Dashboard Project",
    role: "Project Outcome",
    text: "Improved performance and data visualization with clean UI and fast loading experience.",
    stars: 5
  },
  {
    name: "E-Commerce Website",
    role: "Project Outcome",
    text: "Clean UI design with smooth user experience and mobile responsiveness.",
    stars: 5
  },
  {
    name: "ClipForge Tool",
    role: "Project Outcome",
    text: "Efficient video processing workflow with optimized backend structure.",
    stars: 4
  },
  {
    name: "Future Clients",
    role: "Coming Soon",
    text: "Currently working with clients — real testimonials will be updated soon.",
    stars: 5
  }
];

  // We double the array to ensure the loop is seamless
  const loopList = [...testimonials, ...testimonials];

  return (
    <section id="testimonial" className={`test-section py-5 ${darkMode ? "dark" : "light"}`}>
      <div className="container">
      <h2
  style={{
    color: darkMode ? "#fff" : "#111",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "40px"
  }}
>
  Testimonials
</h2>
        
        <div className="testimonial-wrapper">
          <div className="testimonial-track">
            {loopList.map((item, index) => (
              <div className="test-card" key={index}>
                <div className="stars">{"★".repeat(item.stars)}</div>
                <p className="test-text">"{item.text}"</p>
                <div className="test-footer">
                  <h6 className="fw-bold mb-0">{item.name}</h6>
                  <small className="text-primary">{item.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}