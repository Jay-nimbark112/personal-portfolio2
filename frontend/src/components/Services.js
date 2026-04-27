import "./Services.css";

export function Services({ darkMode }) {
  const services = [
    {
      icon: "💻",
      title: "Full Stack Development",
      desc: "Build scalable MERN stack applications with clean architecture and high performance.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Modern, responsive and user-friendly interfaces with attention to detail.",
    },
    {
      icon: "⚙️",
      title: "Backend & APIs",
      desc: "Secure REST APIs, authentication systems, and database management.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      desc: "Smart AI-powered features like chatbots, automation, and data intelligence.",
    },
  ];

  return (
    <section id="services" className="py-5 container">
      <h2 className="text-center mb-4">My Services</h2>

      <div className="row g-4">
        {services.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-3 d-flex">
            <div
 className={`service-card w-100 h-100 ${
  darkMode ? "card-dark" : "card-light"
}`}
>
              <div style={{ fontSize: "30px" }}>{item.icon}</div>
              <h5 className="mt-3">{item.title}</h5>
              <p className="small mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="service-end-fire">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
    </section>
    
  );
}
