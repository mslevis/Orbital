import React from 'react';
import "../design/TaskBox.css";
import logo from '../Logo_tickaholic.png';




const Heading = () => {
    return (
        <div className="header">
            <div className="logo"></div>
            <nav className="top_nav">
                <div>Home</div>
                <div>Learn</div>
                <div>Settings</div>
            </nav>
        </div>
    );
};

export default Heading;