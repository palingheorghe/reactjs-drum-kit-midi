import { TOGGLE_MIDI_SIGNAL } from '../actions/index';

export default function(state = { midiSignal: false, manufacturer: 'no input'}, action) {
    switch(action.type) {
        case TOGGLE_MIDI_SIGNAL: 
            return {
                midiSignal: !state.midiSignal,
                manufacturer: action.payload,
            }
        default:
            console.log('default case has been activated for the',TOGGLE_MIDI_SIGNAL,'reducer');
    }
    return state;
}