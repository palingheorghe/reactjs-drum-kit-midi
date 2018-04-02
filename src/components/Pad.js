import React, { Component } from 'react';

export default class Pad extends Component {
    render() {
        return(
            <div className="Pad" onClick={this.props.eventHandler}>
                {this.props.padKey}
            </div>
        );
    }
}