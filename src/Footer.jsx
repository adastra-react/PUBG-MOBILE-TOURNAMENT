import React from 'react'
import "./Footer.css"
import Logo from './images/GALOGO-1.png';
import Logo2 from './images/GALOGO-2.png';
import GmailLogo from "./images/gmail-logo.png"
import InstaLogo from "./images/insta-logo.png"

function Footer() {
    return (
        <div className="footer">
            <div className="card-cont">
                <div className="card">
                    <div className="card-img-cont">
                        <img className="card-img" src={Logo} alt=""/>
                    </div>
                    <div className="card-txt">
                        <h2 className="card-main-text">Knowledge Base</h2>
                        
                        <span className="card-sub-text"><a href="">Answer to all your questions about the platform</a> </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img className="card-img" src={GmailLogo} alt=""/>
                    </div>
                    <div className="card-txt">
                        <h2 className="card-main-text">Email Us</h2>
                        
                        <span className="card-sub-text"><a href="mailto:gamerzallure@gmail.com">gamerzallure@gmail.com</a> </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img className="card-img" src={InstaLogo} alt=""/>
                    </div>
                    <div className="card-txt">
                        <h2 className="card-main-text">Instagram Us</h2>
                        
                        <span className="card-sub-text"><a href="https://www.instagram.com/gamerzallure/">@gamerzallure</a> </span>
                    </div>
                </div>
            </div>

            <div className="footer-info-cont">
                <div className="footer-info">
                    <img className="footer-logo" src={Logo2} alt=""/>
                </div>
                <div className="contact-info">
                    <h1><a href="tel:(876) 792-2426">PHONE: +1 (876) 792-2426</a></h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;
