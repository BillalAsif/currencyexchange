import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        imgaeURL: 'https://picsum.photos/200'
    };
    render() {
        return (<React.Fragment>
            <img src={this.state.imgaeURL} />
            <span>{this.formatCount()}</span>
            <button>Increament</button>
        </React.Fragment>);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;