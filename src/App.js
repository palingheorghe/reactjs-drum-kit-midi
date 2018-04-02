import React, { Component } from 'react';
import './App.css';

import Pad from './components/Pad';
import KeyboardWrapper from './components/KeyboardWrapper';

import { play, sounds } from './sound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardListener: false,
      controller: 'NO MIDI SIGNAL'
    }

    this.playSound = this.playSound.bind(this);
    this.toggleKeyboard = this.toggleKeyboard.bind(this);
    this.onMIDISucces = this.onMIDISucces.bind(this);
    this.onMIDIFailure = this.onMIDIFailure.bind(this);
    this.gotMIDImessage = this.gotMIDImessage.bind(this);
  }

  componentDidMount() {
    if(navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({
          sysex: false,
      }).then(this.onMIDISucces, this.onMIDIFailure);
    }else{
      console.warn("No MIDI support for your browser");
    }
  }

  onMIDISucces(data) {
    let allInputs = data.inputs.values();
    let signal;
    for(let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = this.gotMIDImessage;
        signal = input.value.name;
    }
    this.setState({
      controller: signal,
    });
  }

  onMIDIFailure() {
    console.warn('I don\'t think your MIDI controller is ok :( ');
  }

  gotMIDImessage(MIDISignal) {
    const midi = MIDISignal.data;
    console.log('signal recieved:',MIDISignal);

    let padStatus = midi[0];
    let padNum = midi[1];
    // let padVelocity = midi[2];
    if(padStatus === 154) {
      switch(padNum){
        case 40: play(sounds['R']);
          break;
        case 41: play(sounds['T']);
          break;
        case 42: play(sounds['Y']);
          break;
        case 43: play(sounds['U']);
          break;
        case 36: play(sounds['F']);
          break;
        case 37: play(sounds['G']);
          break;
        case 38: play(sounds['H']);
          break;
        case 39: play(sounds['J']);
          break;
        default: console.log('error on click');
          break;
      }
    }
  }

  playSound(e) {
    e.preventDefault();

    switch(e.target.innerHTML) {
      case 'R': play(sounds['R']);
      break;
      case 'T': play(sounds['T']);
      break;
      case 'Y': play(sounds['Y']);
      break;
      case 'U': play(sounds['U']);
      break;
      case 'F': play(sounds['F']);
      break;
      case 'G': play(sounds['G']);
      break;
      case 'H': play(sounds['H']);
      break;
      case 'J': play(sounds['J']);
      break;
      default: console.log('error on click');
      break;
    }
  }


  toggleKeyboard(e) {
    e.preventDefault();

    this.setState({
      keyboardListener: !this.state.keyboardListener,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-header-input">Input: {this.state.controller}</p>
          <h1 className="App-title">ReactJS Drum Kit - With MIDI</h1>
        </header>
        <main className="App-main">
          <Pad padKey="R" eventHandler={this.playSound}/>
          <Pad padKey="T" eventHandler={this.playSound}/>
          <Pad padKey="Y" eventHandler={this.playSound}/>
          <Pad padKey="U" eventHandler={this.playSound}/>
          <Pad padKey="F" eventHandler={this.playSound}/>
          <Pad padKey="G" eventHandler={this.playSound}/>
          <Pad padKey="H" eventHandler={this.playSound}/>
          <Pad padKey="J" eventHandler={this.playSound}/>
        </main>
        <button className="Keyboard-button" onClick={this.toggleKeyboard}>
          {this.state.keyboardListener ? 'Disable' : 'Enable'} the Keyboard
        </button>
        {this.state.keyboardListener ? <KeyboardWrapper /> : ''}
      </div>
    );
  }
}

export default App;