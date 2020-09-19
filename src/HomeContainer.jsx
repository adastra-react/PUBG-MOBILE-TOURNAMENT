import React from 'react'
import './HomeContainer.css'
import PubgCraftonIcon from './images/pubg crafton.png'
import TencentLogo from './images/tencentgames1.png'
import QuantumLogo from './images/quantum.png'
import PubgLogo from './images/pubg-logo-1.png'
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import { motion } from 'framer-motion'

function HomeContainer() {
    return (
        <div className="home-container">
            <motion.div
            animate={{scale: 1}}
             className="grid-1">
                    <div className="main-text">
                        <div className="text-box">
                            <h1 className="prm-text">Gamerz Allure's</h1>
                            <h1 className="prm-text">PUBG mobile Tournament</h1>
                            <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdfoQ9ZVqXhWAW-41wrkZUEAz14506XtkYDTuTDYxDzbQN1Kg/viewform?usp=sf_link">
                                <button className="register-btn">Register Now</button>
                            </a>
                            <a target='_blank' href="#">
                                <button className="register-btn">mORE INFO</button>
                            </a>  
                        </div>
                    </div>
                    <div className="footer">
                        <img className="pubg-icon" src={PubgCraftonIcon} alt=""/>
                        <img className="tencent-icon" src={TencentLogo} alt="" srcset=""/>
                        <img className="quanton-icon" src={QuantumLogo} alt=""/>
                        <h2 className="nse-icon">NSE</h2>
                    </div>
                </motion.div>

            <div className="grid-2">
                <div className="gird-2-logo-cont">
                    <img className="grid-2-logo" src={PubgLogo} alt=""/>
                    <div className="grid-2-info">
                        <h2 className="admission-price">admission price $2000JMD</h2>
                        <h2 className="date">date october 28 2020</h2>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfoQ9ZVqXhWAW-41wrkZUEAz14506XtkYDTuTDYxDzbQN1Kg/viewform?usp=sf_link"><button className="register-btn-2">Register</button></a>
                   </div>
                </div>
               
               <div className="grid-2-char-cont">
               <img className="grid-2-char-bg" src="https://pngimg.com/uploads/pubg/pubg_PNG54.png" alt=""/>

               </div>
            </div>
            
        </div>
    )
}

export default HomeContainer
