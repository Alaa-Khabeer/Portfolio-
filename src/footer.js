import React from 'react';
import './footer.css';
class Footer extends React.Component {
    render() {
        return(
    <div className="Fback">
    <div className="left">
        <p>GET IN TOUCH</p>
        <img src={require("./assets/soical/email.png")} width="25px" className='IMG'/>
        <span>alaa.adel.khabeer@gmail.com</span><br/>
        <img src={require("./assets/soical/smartphone.png")} width="25px" className='IMG'/>
        <span>01027446298</span>
    </div>
    <a className="btn Fbtn" href="https://www.linkedin.com/in/alaa-khabeer/" target="_blank" rel='noopener noreferrer'>Contact Me</a>
    <div className="right">
        <img src={require("./assets/soical/linkedin.png")} width="25px" className='IMG'/>
        <img src={require("./assets/soical/facebook.png")} width="25px" className='IMG'/>
        <img src={require("./assets/soical/twitter.png")} width="25px" className='IMG'/>
        <p>Copyright © 2023 AK</p>
    </div>
    </div>
        );
    }
}
export default Footer;