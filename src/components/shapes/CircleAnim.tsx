import React, { useState } from 'react';

import './CircleAnim.css';

export const CircleAnim: React.FC = () => {

    const [animate, setAnimate] = useState(false);



    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 2000);
    };


    return (
        <div style={containerStyles}>
            <div className={`arc ${animate ? 'arcAnimate' : ''}`} onClick={handleClick} />
            <div className={`arcSmall ${animate ? 'arcAnimateSmall' : ''}`} onClick={handleClick} />
        </div>
    );
};

const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};