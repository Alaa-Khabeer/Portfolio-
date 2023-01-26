import React from 'react';
import './progressBar.css';

class ProgBar extends React.Component {
    render() {
    return(
        <div className="progress mt-2 w-100">
            <div className="progress-bar bg-secondary w-75" >{this.props.name}</div>
        </div>
    );
    }
}
export default ProgBar;