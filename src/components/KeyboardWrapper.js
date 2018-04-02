import React, { Component } from 'react';
import { play, sounds } from '../sound';

export default class KeyboardWrapper extends Component {
    constructor(props){
        super(props);

        this.crazySound = this.crazySound.bind(this);
    }

    crazySound(e) {
        e.preventDefault();

        switch(e.code) {
            case 'KeyR': play(sounds['R']);
            break;
            case 'KeyT': play(sounds['T']);
            break;
            case 'KeyY': play(sounds['Y']);
            break;
            case 'KeyU': play(sounds['U']);
            break;
            case 'KeyF': play(sounds['F']);
            break;
            case 'KeyG': play(sounds['G']);
            break;
            case 'KeyH': play(sounds['H']);
            break;
            case 'KeyJ': play(sounds['J']);
            break;
            default: console.log('wrong key press');
            break;
          }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.crazySound);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.crazySound);
    }
    render() {
        return(
            <div>

            </div>
        );
    } 
}