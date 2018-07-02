import { TOGGLE_KEYBOARD_LISTENER } from '../actions/index';

export default function(state = { listenToKeyboard: false }, action) {
    switch(action.type) {
        case TOGGLE_KEYBOARD_LISTENER: 
            return { listenToKeyboard: !state.listenToKeyboard };
        default: 
            console.log('default case has been activated for the', TOGGLE_KEYBOARD_LISTENER, 'action');
    }

    return state;
}