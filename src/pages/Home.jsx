import React, { useState, useEffect } from "react";
import "../styles/home.css";
import greenhouse from "../assets/greenhouse.webp";
import solarpanels from "../assets/solarpanels.webp";
import solar from "../assets/solar.png";
import test from "../assets/test.png";
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
        <section className="stats">
          <div className="heading">
            <h2>Impact</h2>
            <p>numbers that matter</p>
            <p>what we've built with our partners</p>
          </div>
          <div className="stat-wrapper">
            <div className="stats-content" aria-label="Statistics">
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
            </div>
            <div className="stat-image">
              <img src={solarpanels} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="why-pep">
          <h1>Why Choose PEP?</h1>
          <div className="bento-box">
            <div className="left">
              <img src={greenhouse} alt="Renewable powered greenhouse" />
            </div>
            <div className="right">
              <div className="top">
                <div className="reason">
                  <h2>Strategic Collaboration</h2>
                  <p>
                    We work closely with government agencies, private sector
                    players, and development partners to deliver energy projects
                    that are impactful, scalable, and sustainable.
                  </p>
                </div>
                <div className="reason">
                  <h2>Affordable & Scalable Energy</h2>
                  <p>
                    Our solutions are designed to reduce energy costs while
                    remaining scalable for homes, businesses, and large
                    industrial applications.
                  </p>
                </div>
              </div>
              <div className="bottom">
                <div className="reason">
                  <h2>Commitment to Sustainability</h2>
                  <p>
                    We design and deploy clean energy solutions that
                    significantly reduce carbon emissions and dependence on
                    fossil fuels. Our approach prioritizes environmentally
                    responsible technologies that support climate resilience,
                    protect natural resources, and deliver long-term value for
                    communities and businesses.
                  </p>
                  <button
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="container">
        <div className="content" style={{ paddingTop: "4rem" }}>
          <section className="service-expand">
            <h1>josh</h1>
            <img src={solar} alt="" className="solar-image" />
          </section>
        </div>
      </div> */}
      <div className="container">
        <section className="contact">
          <p>Reach Us</p>
          <h2 className="highlight">Get in touch</h2>
          <p
            style={{
              fontWeight: "normal",
            }}
          >
            Have questions about PEP or reneawble energy solutions ?
          </p>
          <div className="contact-section-content">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <p>Send us a message</p>
                <p>pep.org.email</p>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p>Call our team directly</p>
                <p>+1 (243) 555-222</p>
              </div>
              <div className="info-item">
                <h3>Office</h3>
                <p>Flat 3, Khariz Court, Abuja</p>
              </div>
            </div>
            <div className="map">map</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
