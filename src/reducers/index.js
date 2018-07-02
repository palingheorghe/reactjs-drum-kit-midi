import { combineReducers } from 'redux';
import KeyBoardListener from './reducer_keyboardListener';
import MIDISignal from './reducer_midiSignal';

export const rootReducer = combineReducers({
    keyboardListener: KeyBoardListener,
    midiSignal: MIDISignal,
});
