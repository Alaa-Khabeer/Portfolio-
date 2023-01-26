import React from 'react';
import './img.css';

class IMG extends React.Component {
    render() {
    return(
        <img src={require(`${this.props.loc}`)} alt="" width="380px" height="230px" className='Img'/>
    );
    }
}
export default IMG;