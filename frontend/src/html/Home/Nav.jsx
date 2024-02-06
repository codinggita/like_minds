import React from 'react'
import '../../../src/css/all.css';
import bulb from '../../../src/public/bulb-1@2x.png'
import curious from '../../../src/public/curiosity-brainamico-1.svg'
import down from '../../../src/public/download-1@2x.png'
import event from '../../../src/public/events-1@2x.png'
import frame from '../../../src/public/frame-1.svg'
import { Outlet,Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div>
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
                 
                    <div className="frame-communities">
                        <div className="home"><Link to="/">Home</Link></div>
                    </div>
                  <div className="frame-communities">
                        <div className="home"><Link to="/about">About</Link></div>
                    </div>
                    <div className="frame-communities">
                        <div className="home"><Link to="/contact">Contact</Link></div>
                    </div>
                   
                    <div className="frame-login">
                        <Link to="/login">
                            <button className="frame-sign-up">
                                <div className="frame-sign-up-child"></div>
                                <div className="login">Login</div>
                            </button></Link>
                    </div>
                    <div className="frame-login">
                        <Link to="/sign-up">
                            <button className="frame-sign-up">
                                <div className="frame-sign-up-child"></div>
                                <div className="login">Sign Up</div>
                            </button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
