import React, { useRef } from "react";
import greenhouse from "../assets/greenhouse.webp";
import solarpanels from "../assets/solarpanels.webp";
import biomas from "../assets/gas-biomas.jpg";
import consultation from "../assets/energyconsultation.jpg";
import training from "../assets/training.webp";

import "../styles/home.css";

const services = [
  {
    image: solarpanels,
    title: "Solar Energy Solutions",
    text: "Residential, commercial, and off-grid solar systems for rural and industrial applications.",
  },
  {
    image: biomas,
    title: "Gas & Biomass Energy",
    text: "LNG/CNG distribution, biogas production, and waste-to-energy systems.",
  },
  {
    image: greenhouse,
    title: "Energy in Agriculture",
    text: "Solar irrigation, cold storage, and renewable-powered greenhouses.",
  },
  {
    image: consultation,
    title: "Energy Efficiency & Consulting",
    text: "Energy audits, carbon credits, and sustainability advisory.",
  },
  {
    image: training,
    title: "Training & Capacity Building",
    text: "Technical training and community sensitization on renewable energy.",
  },
  {
    image: training,
    title: "Project Financing",
    text: "Grant advisory, PPP development, and investment facilitation.",
  },
];

function ServicesCarousel() {
  const carouselRef = useRef(null);

  const scroll = (dir = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.7) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="services-section" aria-label="Services">
      <h2>Our Services</h2>

      <div className="services-carousel" role="list" ref={carouselRef}>
        {services.map((s) => (
          <article
            key={s.title}
            className="service-card"
            role="listitem"
            tabIndex="0"
          >
            <div
              className="media"
              style={{ backgroundImage: `url(${s.image})` }}
              aria-hidden="true"
            >
              <div className="media-overlay">
                <h4>{s.title}</h4>
              </div>
              ß
            </div>

            <div className="card-body">
              <p>{s.text}</p>
            </div>
          </article>
        ))}

        <a
          className="service-card view-all"
          href="/services"
          aria-label="View all services"
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div className="card-body">
            <strong
              style={{
                fontSize: "1.3rem",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              View all services
            </strong>
            <div
              style={{
                fontSize: "0.9rem",
                color: "rgba(0, 0, 0, 1)",
                textAlign: "center",
              }}
            >
              Explore full offerings
            </div>
          </div>
        </a>
      </div>

      <div className="carousel-nav" aria-hidden="false">
        <button
          className="nav prev"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          className="nav next"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
}
export default ServicesCarousel;
