import React from 'react';
import './skill.css';
import Info from './info';
import ProgBar from './progressBar';

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = ["HTML","CSS","JavaScript","TypeScript","ES6","Node.js","React","Photoshop"];
      }
    render() {
    return(
    <div className="Sback">
    <p className="Stitle col-12">Skills</p>
    <p className="Sbody col-9">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, 
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
    
    <div className="col-9 skill">
        <Info className="col-5"/>

        <div className='bars col-4 ms-5'>
        {this.state.map(name=> (  
            <ProgBar name={name}/>))}  
        </div>
    
    </div>
    </div>
    );
    }
}
export default Skill;