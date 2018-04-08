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
        return (<div className={"Pad" + (this.state.active ? " active" : "")}
        onClick={() => this.props.eventHandler(this.props.padKey)}
        onMouseDown={this.onMouseDownHandler}
        onMouseUp={this.onMouseUpHandler}>
        {this.props.padKey}
    </div>);
    }
}

// onClick={() => this.props.eventHandler(this.props.padKey)}