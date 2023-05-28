import React from "react";
import "./Home.css";
import hero from "../Pic/mee.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top" style={{ padding: "1rem" }}>
            <h3
              className="welcome"
              style={{ fontSize: ".7rem", margin: "0 0 10px 0" }}
            >
              WELCOME TO MY WORLD
            </h3>
            <h1 className="text" style={{ fontSize: "2rem" }}>
              Hi, I’m <span className="text">Islam Khalil</span>
            </h1>
            <h2 style={{ fontSize: "2rem" }}>
              a
              <span className="text" style={{ fontSize: "2rem" }}>
                <Typewriter
                  words={[
                    " Software Developer.",
                    " Professional Coder.",
                    " FrontEnd Developer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p style={{ fontSize: ".9rem" }}>
              As a frontend developer with +1 years of experience, I am skilled
              in HTML, CSS, and JavaScript, redux. I have extensive experience
              working with modern frontend frameworks such as React , and I am
              comfortable with version control tools such as Git , know data
              structures and algorithms I have logical thinking
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div
                  className="button"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <a className="btn_shadow" href="https://github.com/islam-khalil0" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a className="btn_shadow" href="https://www.linkedin.com/in/eslam-khalil-532b05236" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn_shadow" href="/#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
