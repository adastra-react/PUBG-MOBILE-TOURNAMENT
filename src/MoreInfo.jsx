import React from 'react'
import './MoreInfo.css'
import RoomVid from "./images/pubgmobileroom.mp4"
import { motion } from "framer-motion"

function MoreInfo() {
    return (
        <div className="more-inf">
            <div  className="more-info">
            <div className="Rules">
                <div className="gen-rules">
                <h1>RULES (PLEASE READ CAREFULLY)</h1>
                <br/>  
                <span>General Rules</span>
                    <ol>
                        <li>These Official Rules establish the rules of tournament play, including rules governing player eligibility, tournament structure, point structure, prize awards, and player conduct.</li>
                        <li>Read and perceive these Official Rules before you participate within the tournament. You must settle for these Official Rules so as to participate within the tournament, and you must abide by these Official Rules in order to remain eligible to play in the Tournament and receive prizes. All of this is explained below.</li>
                        <li>All Tournament matches are allowed to be streamed online by PUBG Mobile.</li>
                        <li>PUBG Mobile has the right to decide outside or even against the rulebook in special cases to guarantee fair play.</li>
                        <li>At least 75% of the participants is needed for the games to begin.</li>
                    </ol>
                </div>
                
                <div className="rule-settings">
                     <h2>GAME SETTINGS</h2>
                   <ul>
                       <li>🏈 Team – Solo</li>
                       <li>🌍 Server – North America</li>
                       <li>🗺 Map – Sanhok</li>
                       <li>📳 Mode - TPP Classic</li>
                   </ul>
                    
                </div>

                <div className="tourn-rules">
                    <h2>TOURNAMENT RULES</h2>
                    <ol>
                        <li>only the first 500 Registrations are allowed.</li>
                        <li>Only mobile phones are allowed, no Emulators.</li>
                        <li>Teaming with other players will result in permanent a ban from the match and may result in Ban from the tournament.</li>
                        <li>Players must use the PUBG Mobile Username/IGN/Gamer tag provided in the registration form for the tournament. Any change in username should be reported to support at least 4 hours before the match time.</li>
                        <li>Never share room code with non-registered players.</li>
                        <li>Unregistered players and players who have not paid the entrance fee will be barred from joining tournament.</li>
                        <li>All players must install the newest version of the game in order to participate in PUBG Online tournament. Any update must be installed before the tournament starts, so delays will be at a minimum.</li>
                        <li>The players are not allowed to use any hacks or any other software/tool which gives them undue advantage.</li>
                        <li>Players are not allowed to use any 3rd party applications that will enhance or change the default gameplay.</li>
                        <li>All players are encouraged to record the whole match, including the mobile console with another filming device. Players must turn off the microphone function, and turn on the speaker and change the voice channel to All in case of any urgent announcement from the spectator and organiser.</li>
                        <li>All players should provide their own essentials for the tournament, sush as : wifi, mobile data, phone, latest version of the game etc.</li>
                        <li><strong>No refunds after the matches have started</strong></li>
                    </ol>
                </div>
            </div>

            <div className="description">
                <div>
                    <h1>DESCRIPTION (PLEASE READ CAREFULLY)</h1>
                    <div className="desc-reg">
                        <span>How to register</span>
                        <ul>
                            <li>Register for the tournament using the form provided via the big register button below.</li>
                            <li>Complete the form with all the correct information.(CORRECT PHONE NUMBER AND EMAIL ADDRESS ARE IMOPORTANT!!!)</li>
                            <li>After your registration form has be submitted, you will receive an email notication from gamerzallure@gmail.com with the available methods for payment.</li>
                            <li>The methods available for payment are : NCB, PAYPAL and SoctiaBank</li>
                            <li>After you have successfully made the payment, send a screenshot along with the gamer ID / Gamer tag used to sign up the registration to gamerzallure@gmail.com.</li>
                            <li>The deadline for registration is OCTOBER 15 2020.</li>
                        </ul>
                    </div>
                </div>

                <div className="join-room">
                    <h2>How to join room</h2>
                    <div className="room-vid-cont">
                        <video className="room-vid" controls src={RoomVid} type="video/mp4"></video>
                    </div>
                    <br/>

                    <div>
                    <h2>Game Play</h2>
                        <ul>
                            <li>Check-in for the tournament. Please note that Check-In window is open 15 minutes before every tournament.</li>
                            <li>Join the Game Room The information of the Game Room will be sent to participants through email and SMS 15 minutes before the game time. In case need help please contact the Support.</li>
                            <li>Play the Match Now you’re ready to play your game. Do-follow the rules to ensure fair play.</li>
                            <li>A series of 6 matches will be played. The first 5 matches will be grouped from A-E simultaneously - (AT THE SAME TIME) or one after the other depending on the amount of players who sign up.</li>
                            <li>Each group will consist of 100 players.</li>
                            <li>The top 20 players of each group make the 6th and last match.</li>
                            <li>The 1st 2nd and 3rd ranked players of the last match will win the prize.</li>
                        </ul>
                    </div>

                    <div className="prize">
                        <h2>Prize</h2>
                        <div className="prize-info">
                            <ul className="prize-list">
                                <li>1st place ➡ <strong><span>$25000JMD</span></strong> </li>
                                <li>2nd place ➡ <strong><span>$15000JMD</span></strong> </li>
                                <li>3rd place ➡ <strong><span>$8000JMD</span></strong></li>
                                <li>For players who have won prizes, the prize cash will be sent via payment method of choice within 48 hours.</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="register-btn-cont">
                <a className="register-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdfoQ9ZVqXhWAW-41wrkZUEAz14506XtkYDTuTDYxDzbQN1Kg/viewform?usp=sf_link">REGISTER</a>
            </div>
        </div>
    )
}

export default MoreInfo
