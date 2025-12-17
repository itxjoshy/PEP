import React, { useState, useEffect } from "react";
import "../styles/home.css";
import greenhouse from "../assets/greenhouse.jpg";
import solarpanels from "../assets/solarpanels.jpg";
import solar from "../assets/solar.png";
import ServicesCarousel from "../components/ServicesCarousel";
import Header from "../components/Header";

function Counter({ end = 0, duration = 1500 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };
    requestAnimationFrame(step);
    return () => {}; // cleanup not needed for rAF here
  }, [end, duration]);

  const formatted = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);

  return <h2>{formatted + "+"}</h2>;
}

function Home() {
  const stats = [
    { icon: "🔧", end: 500, label: "Projects Completed" },
    { icon: "👥", end: 300000, label: "People Served" },
    { icon: "⚡️", end: 150000000, label: "kWh Generated" },
    { icon: "🌿", end: 50000000, label: "CO2 Emissions Reduced (kg)" },
  ];

  return (
    <div className="Home">
      <Header />
      <main className="home-main">
        <h1>
          Powering Nigeria’s <br />
          Future with Clean <br /> Energy
        </h1>
        <div className="cta">
          our solution
          <button className="get-started-btn">&#8594;</button>
        </div>
      </main>
      <div className="container grid-floor">
        <section className="about-pep">
          <h1>
            Shaping The Future <br />
            <span className="highlight">Smart Tech For Green</span>
            <br />
            Energy And Grid Revenue
          </h1>
          <div className="about-text">
            <p>
              Pinnacle Energy Partners (PEP) is a Nigerian renewable energy
              startup dedicated to delivering cutting-edge solutions in solar,
              gas, biomass, and clean energy applications in agriculture.
              <br />
              <br /> We combine innovation with sustainability to provide
              affordable and efficient power for Nigeria’s growing energy needs.
              Mission: To provide affordable, sustainable, and efficient
              renewable energy solutions that drive industrial growth and
              enhance rural electrification in Nigeria. Vision: To be a leading
              player in Nigeria’s clean energy sector, pioneering profitable and
              scalable renewable energy solutions.
            </p>
            <button className="btn">Get Started</button>
          </div>
        </section>
      </div>
      <div className="container">
        <ServicesCarousel />
      </div>
      <div className="container">
        <section className="service-expand">
          <h1>josh</h1>
          <img src={solar} alt="" className="solar-image" />
        </section>
      </div>

      <div className="container">
        <section className="stats" aria-label="Statistics">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat"
              role="group"
              aria-label={s.label}
            >
              <div className="stat-top">
                <div className="icon" aria-hidden>
                  {s.icon}
                </div>
                <Counter end={s.end} />
              </div>
              <p>{s.label}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
