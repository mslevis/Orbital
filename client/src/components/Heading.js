import React from 'react';
import "../design/TaskBox.css";
import logo from '../Logo_tickaholic.png';




const Heading = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <h1 className="text-center something">Tickaholic</h1>
        </div>
    );
};

export default Heading;