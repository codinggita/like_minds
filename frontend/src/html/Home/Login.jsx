
import React from 'react';
import '../../../src/css/login.css';
import loginimg from '../../../src/public/loginimage-1@2x.png'
import rec from '../../../src/public/rectangle-9.svg'


function Login() {
  return (
    <body>
    <div className="desktop-2">
      <section className="rectangle-parent">
        <div className="frame-child"></div>
        <img
          className="loginimage-1-icon"
          loading="eager"
          alt=""
          src={loginimg}
        />

        <div className="frame-wrapper">
          <div className="frame-parent">
            <div className="welcome-back-parent">
              <div className="welcome-back">Welcome Back!</div>
              <div className="frame-container">
                <div className="rectangle-group">
                  <div className="frame-item"></div>
                  <div className="email"><input type="textbox" placeholder='Email' /></div>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <button className="rectangle-container">
                <div className="frame-inner"></div>
                <div className="password"><input type="password" placeholder='password' /></div>
              </button>
            </div>
            <div className="frame-wrapper1">
              <button className="vector-parent">
                <img
                  className="rectangle-icon"
                  alt=""
                  src={rec}
                />

                <div className="submit">Submit</div>
              </button>
            </div>
            <div className="forgot-password-wrapper">
              <div className="forgot-password">Forgot Password?</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </body>
  );
}

export default Login;


