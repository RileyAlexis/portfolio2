import React from "react";
import './titlebar.css';

import titleName from '../../assets/titleName.png';
import titleNameDark from '../../assets/titleNameDark.png';
import { ButterflySVG } from "../SVGs/Butterfly";

export const TitleBar: React.FC = () => {
    return (
        <div className="titleBarContainer">
            <div className="asciiBox">
                <img src={titleNameDark} />
            </div>
            <div className="secondaryBox">
                <p>⚙️ Full Stack Developer</p>
                <p>🌈 Artist</p>
                <p>🏳️‍⚧️ Magical Human</p>
            </div>
        </div>
    )
}