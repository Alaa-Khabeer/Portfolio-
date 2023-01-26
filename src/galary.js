import React from 'react';
import './galary.css';
import IMG from './img';
class Galary extends React.Component {
    constructor(props) {
        super(props);
        this.state = ["./assets/galary/final_pro.PNG","./assets/galary/flex.PNG",
        "./assets/galary/res_pro.PNG","./assets/galary/html_pro.PNG",
        "./assets/galary/res1.PNG","./assets/galary/ux.PNG"
        ];
      }
    render() {
    return(
        <>
        <p className='Gtitle'>Portfolio</p>
        <div className="colection">
        {this.state.map(loc=> (  
        <IMG loc={loc}/>))}  
        </div>
        </>
    );
    }
}
export default Galary;