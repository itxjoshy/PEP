import React from "react";
import "../styles/home.css";
import Header from "../components/Header";

function Home() {
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
      <div className="container ">
        <section className="about-pep">
          <p>
            PEP is designed to streamline your project workflows and enhance
            team collaboration.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
