export const TOGGLE_KEYBOARD_LISTENER = 'TOGGLE_KEYBOARD_LISTENER';
export const TOGGLE_MIDI_SIGNAL = 'TOGGLE_MIDI_SIGNAL';
export const PAD_TAPPED = 'PAD_TAPPED';
export const PAD_UNTAPPED = 'PAD_UNTAPPED';

export function addKeyboardListener() {
    return {
        type: TOGGLE_KEYBOARD_LISTENER,
    };
}

export function onMidiSignal(manufacturer) {
    return {
        type: TOGGLE_MIDI_SIGNAL,
        payload: manufacturer
    };
}

export function onPadTap(pad) {
    return {
        type: PAD_TAPPED,
        payload: {
            keyPressed: pad, 
            active: true,
        }
    }
}

export function onPadUntap(pad) {
    return {
        type: PAD_UNTAPPED,
        payload: {
            keyUntapped: pad,
            active: false,
        }
    }
}