import { PAD_TAPPED, PAD_UNTAPPED } from '../actions/index';

export default function(state = { keyPressed: '', active: false }, action) {
    switch(action.type) {
        case PAD_TAPPED: 
            return {
                keyPressed: action.payload.keyPressed,
                active: true
            };
        case PAD_UNTAPPED : 
            return ;
        default: return state;
    }
}