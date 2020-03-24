import React, { Component } from 'react';

class Quote extends Component {
    state = {
        quote: 'Chuck Norris can divide by zero'
    }

    render() {
        const { quote } = this.state;

        return (
            <div>
                <p>{quote} </p>
            </div>
        )
    }
}

export default Quote;