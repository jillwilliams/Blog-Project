import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                {/* <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a> */}
                <h1>
                    Live the Dream
                </h1>
            </nav>
            
            <div>
                <a href="https://www.facebook.com">
                    <img src={require('../assets/fb.png')} alt="FB" className="facebookIcon" />
                </a>
                <a href="https://twitter.com">
                    <img src={require('../assets/twitterButton.png')} alt="FB" className="facebookIcon" />
                </a>
                <a href="https://www.youtube.com">
                    <img src={require('../assets/youtube.png')} alt="FB" className="facebookIcon" />
                </a>
            </div>
        </header>
    );
}

export default Header;
