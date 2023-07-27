import React, { useState } from "react";
import {
    DiscFill, HouseHeart, PersonHeart, GearFill, MusicNoteBeamed, Linkedin, Slack,
    CupHotFill, BagHeartFill
} from 'react-bootstrap-icons';

const CircularNav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive((prevState) => !prevState);
    };

    return (
        <div className="circ-nav">
            <div className="menu-container">
                <div className={`menu ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li style={{ '--i': 1 }}>
                            <a href="/"><HouseHeart /></a>
                        </li>
                        <li style={{ '--i': 2 }}>
                            <a href="#"><PersonHeart /></a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href="#"><GearFill /></a>
                        </li>
                        <li style={{ '--i': 4 }}>
                            <a href="https://brierre.github.io/vocal-music-at-JSHS/" target="_blank"><MusicNoteBeamed /></a>
                        </li>
                        <li style={{ '--i': 5 }}>
                            <a href="https://www.linkedin.com/in/heatherlhaigh/" target="_blank"><Linkedin /></a>
                        </li>
                        <li style={{ '--i': 6 }}>
                            <a href="https://slack.com/" target="_blank"><Slack /></a>
                        </li>
                        <li style={{ '--i': 7 }}>
                            <a href="https://www.amazon.com/s?k=pdga+disc+golf&crid=3QARU0WYGIY5J&sprefix=p%2Caps%2C1776&ref=nb_sb_noss_2" target="_blank"><BagHeartFill /></a>
                        </li>
                        <li style={{ '--i': 8 }}>
                            <a href="https://www.nespresso.com/us/en/vertuo-coffee-pods" target="_blank"><CupHotFill /></a>
                        </li>
                        <li style={{ '--i': 9 }}><button id="circular-nav-button" className="toggle" onClick={handleToggle}><DiscFill /></button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CircularNav;
