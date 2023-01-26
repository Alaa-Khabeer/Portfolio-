import React from 'react';
import './button.css';
class Button extends React.Component {
    render() {
        return(
            <a  
            href={this.props.link}
            target="_blank" 
            rel='noopener noreferrer'
            className="btn link">
                {this.props.name}
            </a>
            );
        }
}
export default Button;