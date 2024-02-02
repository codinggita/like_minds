import React from 'react';
import '../../../src/css/about.css';
import aboutimage from '../../../src/public/aboutus-1@2x.png'
import rec from '../../../src/public/rectangle-6.svg'


function About() {
  return (
    <div className="desktop-3">
      <section className="vector-parent1">
        <img className="frame-child1" alt="" src={rec}></img>

        <h1 className="about-us">About Us</h1>
        <div className="lorem-para-parent">
          <div className="lorem-para">
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <img
            className="aboutus-1-icon"
            loading="eager"
            alt=""
            src={aboutimage}
          />
        </div>
      </section>
    </div>
  );
}

export default About;
