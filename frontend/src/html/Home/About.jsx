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
// @media screen and (max-width: 975px) {
//   .about-us {
//     font-size: 2.5rem;
//     line-height: 5rem;
//   }
//   .aboutus-1-icon,
//   .lorem-para {
//     flex: 1;
//   }
//   .lorem-para-parent {
//     flex-wrap: wrap;
//     gap: var(--gap-52xl);
//   }
//   .vector-parent {
//     padding-left: 3.25rem;
//     box-sizing: border-box;
//   }
// }
// @media screen and (max-width: 700px) {
//   .vector-parent {
//     padding-left: 1.63rem;
//     padding-top: 2.94rem;
//     padding-bottom: 6.88rem;
//     box-sizing: border-box;
//   }
// }
// @media screen and (max-width: 450px) {
//   .about-us {
//     font-size: 1.88rem;
//     line-height: 3.75rem;
//   }
//   .lorem-para-parent {
//     gap: var(--gap-52xl);
//   }
// }