import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
      return(
        <div className="header">
        <div className="info-site">
            <h2>Alaa Khabeer</h2>
            <h3>Front-End Developer</h3>
            <a className="btn link" href="https://www.linkedin.com/in/alaa-khabeer/" target="_blank" rel='noopener noreferrer' >Contact Me</a>
        </div>
        <div>
            <img src={require("./assets/myPhoto.png")} className="imageSite" alt="" />
        </div>
        </div>
      );
    }
  }
  
  export default Header;