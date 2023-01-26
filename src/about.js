import React from 'react';
import './about.css';
import MyPDF from './assets/Alaa_casual cv.pdf';

class About extends React.Component {
    render() {
      return(
        <div className="col-12 txt">
        <p className="title col-2">About Me</p>
        
        <p className="body col-6">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
            Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, 
            porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
            Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, 
            porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            <br/>
            <a href={MyPDF} target="_blank" rel='noopener noreferrer' className="btn mt-4  btn_download" download="Alaa_casual cv.pdf">Download Resume</a></p>
        </div>
      );
    }
  }
  
  export default About;