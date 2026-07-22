import './Experience.css';  


export function Experience({ darkMode }) {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Metal Mind HR Services",
      tech: "HTML, CSS, JS, PHP, MySQL, cPanel, Laravel",
      duration: "Present",
      points: [
        "Built responsive websites using HTML, CSS, JavaScript.",
        "Developed backend using PHP & Laravel.",
        "Managed MySQL databases.",
        "Handled deployment using cPanel.",
      ],
    },
    {
      role: "Full stack developer",
      company: "Junomoneta Finsol Pvt Ltd",
      tech: "React, Node, MongoDB, Express, MySQL",
      duration: "July 2024 - March 2026",
      points: [
        "Created responsive React.js interfaces.",
        "Integrated 10+ REST APIs.",
        "Resolved 30+ bugs and Fine-tuned performance.",
        "Managed 10+ deployments on AWS-based cloud.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Corizo",
      tech: "React, Node, MongoDB, Express, MySQL",
      duration: "Dec 2023 - March 2024",
      points: [
        "Built web apps using Flask & Django.",
        "Integrated React with REST APIs.",
        "Worked with databases.",
        "Improved performance & debugging.",
      ],
    },
  ];

  return (
    <section id="experience" className={`exp-section ${darkMode ? "dark" : "light"}`}>
      <div className="container">
       <h2 className={`text-center fw-bold mb-5 section-title`}>Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-content">
                
                <h5 className="fw-bold">{exp.role}</h5>
                <p className="text-primary mb-1">{exp.company}</p>
                <p className="small opacity-75 mb-2">{exp.tech}</p>
                <span className="small opacity-75">{exp.duration}</span>

                <ul className="mt-2">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
