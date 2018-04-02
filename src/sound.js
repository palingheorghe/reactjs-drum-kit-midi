import kick1 from './sounds/BOOMIN KICK 1.wav';
import kick2 from './sounds/BOOMIN KICK 2.wav';
import hat1 from './sounds/BOOMIN HAT 1.wav';
import hat2 from './sounds/BOOMIN HAT 2.wav';
import og808 from './sounds/BOOMIN OG 808.wav';
import snare1 from './sounds/BOOMIN CLASSIC TRAP HOUSE SNARE 1.wav';
import snare2 from './sounds/BOOMIN CLASSIC TRAP HOUSE SNARE 2.wav';
import clap from './sounds/BOOMIN CLAP 1.wav';

const soundNameToAudio = {
    kick1: new Audio(kick1),
    kick2: new Audio(kick2),
    hat1: new Audio(hat1),
    hat2: new Audio(hat2),
    og808: new Audio(og808),
    snare1: new Audio(snare1),
    snare2: new Audio(snare2),
    clap: new Audio(clap),
}

export const sounds = {
    'R': 'kick1',
    'T': 'snare1',
    'Y': 'clap',
    'U': 'hat1',
    'F': 'kick2',
    'G': 'snare2',
    'H': 'og808',
    'J': 'hat2',
};

export function play(soundName) {
    let audio = soundNameToAudio[soundName];
    audio.currentTime = 0;
    audio.play();
}