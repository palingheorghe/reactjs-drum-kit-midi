import React, { Component } from 'react';
import '../App.css';

import Pad from '../components/Pad';
import KeyboardWrapper from '../components/KeyboardWrapper';

import { play, stop } from '../sound';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addKeyboardListener, onMidiSignal } from '../actions/index';

// array cu toate padurile din React 
// un obiect care are la cheie ID-ul pad-ului (controller) apasat si la value un pad (react) din array 
//cand se apasa un pad(controoller) se apeleaza functia din react de onmousedown/onmouseup
// TODO: -- buton pentru conectarea cu MIDI, ca sa fie totul manual, nu automat si sa se piarda resurse

const pads = {
  40: 'R',
  41: 'T',
  42: 'Y',
  43: 'U',
  36: 'F',
  37: 'G',
  38: 'H',
  39: 'J',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleKeyboard = this.toggleKeyboard.bind(this);
    this.onMIDISucces = this.onMIDISucces.bind(this);
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
    // console.log(data); aici vedem la prima intrare cate inputuri si outputuri sunt
    let allInputs = data.inputs.values();
    let signal; //brand 
    for(let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = this.gotMIDImessage;
        signal = input.value.name;
    }
    if(data.inputs.size !== 0) {
      this.props.onMidiSignal(signal);
    }
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
      let key = pads[padNum];
      play(key);
    }
  }

  playSoundOnClick(key) {
    play(key);
  }

  stopSoundOnClick(key) {
    stop(key);
  }

  toggleKeyboard(e) {
    e.preventDefault();

    this.props.addKeyboardListener();
  }

  render() {
    const { keyboardListener, midiSignal } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-header-input">Input: {midiSignal.manufacturer}</p>
          <h1 className="App-title">ReactJS Drum Kit - With MIDI</h1>
        </header>
        <main className="App-main">
          <Pad padKey="R" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="T" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="Y" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="U" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="F" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="G" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="H" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
          <Pad padKey="J" eventHandlerOn={this.playSoundOnClick} eventHandlerOff={this.stopSoundOnClick}/>
        </main>
        <button className="Keyboard-button" onClick={this.toggleKeyboard}>
          {keyboardListener.listenToKeyboard ? 'Disable' : 'Enable'} the Keyboard
        </button>
        {keyboardListener.listenToKeyboard ? <KeyboardWrapper /> : ''}
      </div>
    );
  }
}

function mapStateToProps({ keyboardListener, midiSignal }) {
  return {
    keyboardListener,
    midiSignal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addKeyboardListener, onMidiSignal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);