import React, { Component } from 'react';

export default class Pad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };


        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
    }

    onMouseUpHandler() {
        this.setState({
            active: false,
        });
    }

    onMouseDownHandler() {
        this.setState({
            active: true,
        });
    }

    render() {
        return (<div 
                    className={"Pad" + (this.state.active ? " active" : "")}
                    onMouseDown={this.props.eventHandlerOn(this.props.padKey)}
                    onMouseUp={this.props.eventHandlerOff(this.props.padKey)}>
                        {this.props.padKey}
                </div>);
    }
}