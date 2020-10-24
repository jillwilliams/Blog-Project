import React from 'react'
import './style.css';

const Logo = (props) => {
    return (
        <div className="logo">
            <img src={require("../../components/assets/pic5.png" )}alt="logo" className="logoImage" />
        </div>
    );
}
    
export default Logo;