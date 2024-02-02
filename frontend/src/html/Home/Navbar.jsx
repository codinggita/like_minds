import React from 'react';
import '../../../src/css/all.css'
import bulb from '../../../src/public/bulb-1@2x.png'
import curious from '../../../src/public/curiosity-brainamico-1.svg'
import down from '../../../src/public/download-1@2x.png'
import event from '../../../src/public/events-1@2x.png'
import frame from '../../../src/public/frame-1.svg'
import { Outlet,Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='maindiv'>
    <div className="desktop-1">
      <section className="frame-root">
        <nav className="frame-home-communities-resourc">
    
          <div className="frame-home-community-resources">
            <img
              className="bulb-1-icon"
              loading="eager"
              alt=""
              src={bulb}
            />

            <b className="likeminds">LikeMinds</b>
          </div>
          <div className="frame-home">
            {/* <img
              className="frame-home-child"
              alt=""
              src={rec3}
            /> */}

            <div className="frame-communities">
              <div className="home"><Link to = "/">Home</Link></div>
            </div>
            {/* <div className="frame-communities">
              <div className="events"><Link to = "/events">Events</Link></div>
            </div> */}
            <div className="frame-communities">
              <div className="home"><Link to = "/about">About</Link></div>
            </div>
            <div className="frame-communities">
              <div className="home"><Link to = "/contact">Contact</Link></div>
            </div>
            {/* <div className="frame-communities1">
              <div className="communities"><Link to="/communities">Communities</Link></div>
            </div>
            <div className="frame-communities1">
              <div className="resources"><Link to="/resources">Resources</Link></div>
            </div> */}
            <div className="frame-login">
            <Link to="/login">
              <button className="frame-sign-up">
                <div className="frame-sign-up-child"></div>
                <div className="login">Login</div>
              </button></Link>
            </div>
            
    
            
            {/* <button className="frame-connect">
              <div className="frame-connect-child"></div>
              <div className="frame-curiosity-brainamico">
                <div className="sign-up">Sign Up</div>
              </div>
            </button> */}
            <div className="frame-login">
            <Link to="/sign-up">
              <button className="frame-sign-up">
                <div className="frame-sign-up-child"></div>
                <div className="login">Sign Up</div>
              </button></Link>
            </div>
          </div>
        </nav>
        <Outlet/>
        <div className="text-question">
          <i className="are-you-in-container">
            <p className="are-you-in">Are you in search of some like</p>
            <p className="minds-to-be">minds to be with, to learn with,</p>
            <p className="to-grow-with">to grow with?</p>
          </i>
        </div>
        <div className="text-placeholder">
          <div className="text-placeholder-child"></div>
          <img
            className="frame-empty-icon"
            loading="eager"
            alt=""
            src={frame}
          />
        </div>
      </section>
      <div className="so-what-are-container">
        <p className="so-what-are-you-waiting-for">
          <span>
            <span>
              <span className="so-what-are">So, what are you </span>
              <span className="waiting">waiting</span>
              <span> for?</span>
            </span>
          </span>
        </p>
        <p className="lets-connect-on-likem">
          <span>
            <span>
              <span>Let’s Connect on </span>
            </span>
            <span>
              <span className="span"> </span>
            </span>
          </span>
          <span>
            <span className="likeminds1">
              <span className="likeminds2">LikeMinds</span>
            </span>
          </span>
        </p>
      </div>
      <section className="wait-frame">
        <div className="curiosity-frame">
          <div className="curiosity-brainamico-frame">
            <div className="curiosity-brainamico-frame-child"></div>
            <img
              className="curiosity-brain-amico-1"
              loading="eager"
              alt=""
              src={curious}
            />

            <div className="download-frame">
              <div className="question-frame">
                <div className="got-a-question-container">
                  <p className="got-a-question">
                    <span>
                      <span className="got-a">Got a </span>
                      <span className="question">question</span>
                    </span>
                    <span className="span1">
                      <span className="span2"> </span>
                    </span>
                    <span>
                      <span className="span3">?</span>
                    </span>
                  </p>
                  <p className="ask-here">
                    <span>
                      <span>Ask here.</span>
                    </span>
                  </p>
                </div>
                <div className="frame-frame">
                  <textarea className="like-minds-text" rows={5} cols={13}></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="curiosity-brainamico-frame1">
            <div className="curiosity-brainamico-frame-item"></div>
            <div className="want-to-be-part-of-a-community-parent">
              <div className="want-to-be-container">
                <p className="want-to-be">Want to be part</p>
                <p className="of-a">of a</p>
                <p className="community">
                  <b className="b"> </b>
                  <span className="community1">
                    <span>Community</span>
                    <span className="span4"> </span>
                  </span>
                  <span className="span5">
                    <span className="span6">?</span>
                  </span>
                </p>
              </div>
              <div className="events-frame">
                <textarea className="community-frame" rows={5} cols={13}></textarea>
              </div>
            </div>
            <img
              className="download-1-icon"
              loading="eager"
              alt=""
              src={down}
            />
          </div>
          <div className="curiosity-brainamico-frame2">
            <div className="curiosity-brainamico-frame-inner"></div>
            <img
              className="events-1-icon"
              loading="eager"
              alt=""
              src={event}
            />
          </div>
        </div>
      </section>
      <section className="rectangle-frame">
        <div className="participate-frame"></div>
      </section>
      <section className="community-frame1">
        <div className="participate-in-the-container">
          <p className="participate-in-the-upcoming">
            <span>
              <span>Participate in the upcoming</span>
              <span className="span7"> </span>
            </span>
          </p>
          <p className="events1">Events</p>
        </div>
        <div className="events-text">
          <textarea className="rectangle-frame1" rows={5} cols={13}></textarea>
        </div>
        {/* <img className="community-1-icon" alt="" src={comm1} /> */}
      </section>
    </div>
    </div>
  );
}

export default Navbar;
