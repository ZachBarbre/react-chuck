import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
    render () {
        return (
            <div className="wrapper-image">
                <img src="images/jesus-chuck.jpg" alt="Chuck is God" />
            </div>
        )
    }
}

export default Image;