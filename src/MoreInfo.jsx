import React from 'react'
import './MoreInfo.css'
import RoomVid from "./images/pubgmobileroom.mp4"

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
                    <li>Read and perceive these Official Rules before you’ll participate within the tournament. You must settle for these Official Rules so as to participate within the tournament, and you must abide by these Official Rules in order to remain eligible to play in the Tournament and receive prizes. All of this is explained below.</li>
                    <li>All Tournaments matches are allowed to be streamed online by PUBG Mobile.</li>
                    <li>PUBG Mobile has the right to decide outside or even against the rulebook in special cases to guarantee fair play.</li>
                    <li>At least 75% of the participants is need for the games to begin.</li>
                </ol>
                </div>
                
                <div className="rule-settings">
                     <h2>GAME SETTINGS</h2>
                   <ul>
                       <li>🏈 Team – Solo</li>
                       <li>🌍 Server – North America</li>
                       <li>🗺 Map – Erangel</li>
                       <li>📳 Mode - TPP Classic</li>
                   </ul>
                    
                </div>

                <div className="tourn-rules">
                    <h2>TOURNAMENT RULES</h2>
                    <ol>
                        <li>First 500 Registrations are allowed.</li>
                        <li>Only mobile phones are allowed, no Emulators.</li>
                        <li>Teaming with other players will result in permanent ban from Tournaments and may result in Ban from GameS.</li>
                        <li>Players must use the PUBG Mobile Username/IGN/Gamer tag provided in the registration form for the tournament. Any change in username should be reported to support at least 4 hours before the match time.</li>
                        <li> Never share room code with non-registered players.</li>
                        <li>Unregistered players entering room will be banned from Tournaments.</li>
                        <li>All players must install the newest version of the game in order to participate in PUBG Online Tournament. Any update must be installed before the tournament starts, so delays will be at a minimum.</li>
                        <li>The players are not allowed to use any hacks or any other software/tool which gives them undue advantage.</li>
                        <li>Players are not allowed to use any 3rd party applications that will enhance or change the default gameplay.</li>
                        <li>All players are encouraged to record the whole match, including the mobile console with another filming device. Players must turn off the microphone function, and turn on the speaker and change the voice channel to All in case of any urgent announcement from the spectator and organiser.</li>
                        <li>No refunds</li>
                    </ol>
                </div>
            </div>

            <div className="description">
                <div>
                    <h1>DESCRIPTION (PLEASE READ CAREFULLY)</h1>
                    <div className="desc-reg">
                        <span>How to register</span>
                        <ul>
                            <li>Pay the entrance fee for the tournament through an available payment method and take a picture or screenshot of the payment</li>
                            <li>Click the register button at the bottom of the page to access the register form.</li>
                            <li>Complete the form with all the correct information and payment screenshot.</li>
                            <li>Once the form is completed and submitted, you will be added to a whatsapp group.</li>
                            <li>The room key and password will be added to the group 30mins before the match starts.</li>
                            <li>The deadline for registration is OCTOBER 12 2020.</li>
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
                            <li> Check-in for the tournament Please note that Check-In window is open 15 minutes before every tournament.</li>
                            <li>Join the Game Room The information of the Game Room will be sent to participants through email and SMS 15 minutes before the game time. In case need help please contact the Support.</li>
                            <li>Play the Match Now you’re ready to play your game. Do-follow the rules to ensure fair play.</li>
                        </ul>
                    </div>

                    <div className="prize">
                        <h2>Prize</h2>
                        <div className="prize-info">
                            <ul>
                                <li> How to receive prize</li>
                                <li>For players who has won prizes, the prize cash will be sent via payment method of choice within 48 hours.</li>
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
