import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import clipFore from "../assets/clipfore.png";
import stockdata from "../assets/stockdata.png"
import storeweb from "../assets/storeweb.png"

import "./Portfolio.css";

export function Portfolio({ darkMode }) {
  const projects = [
    {
      title: "Stock Data Dashboard",
      image: stockdata,
      tech: "Python, Flask, React",
      link: "#"
    },
    {
      title: "ClipForge",
      image: clipFore,
      tech: "FFmpeg, Node.js",
      link: "#"
    },
    {
      title: "Store Website",
      image: storeweb,
      tech: "PHP, Laravel, MySQL",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className={`portfolio-section py-5 ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 section-title">Portfolio</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio-card">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <h4>{project.title}</h4>
                  <p>{project.tech}</p>
                  <a href={project.link} className="btn btn-primary btn-sm">View Project</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}