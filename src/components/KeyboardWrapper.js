import React, { Component } from 'react';
import { play, stop } from '../sound';

export default class KeyboardWrapper extends Component {
    playSound(e) {
        e.preventDefault();
        play(e.code[3]);

    }
    // TODO: WRONG KEY PRESSED CASE 
    stopSound(e) {
        e.preventDefault();
        stop(e.code[3]);
        console.log('sa inchis')
    }

    componentDidMount() {
        window.addEventListener('keydown', this.playSound);
        window.addEventListener('keyup', this.stopSound);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.playSound);
        window.removeEventListener('keyup', this.stopSound);
    }
    render() {
        return(
            <div>

            </div>
        );
    } 
}