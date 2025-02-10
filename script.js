const keys = document.querySelectorAll('.key');
const playMelodyBtn = document.getElementById('playMelody');

/* Event Listeners for Mouse Click */
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

/* Function to Play Note */
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

/* Keyboard Functionality */
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  if (e.repeat) return; // Prevents repeated sounds when holding a key

  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

// Extra Credit - Plays Twinkle Twinkle Little Star 
const melody = ['C', 'C', 'G', 'G', 'A', 'A', 'G', 'F', 'F', 'E', 'E', 'D', 'D', 'C'];
let melodyIndex = 0;

playMelodyBtn.addEventListener('click', () => {
  melodyIndex = 0;
  playNextNote();
});

function playNextNote() {
  if (melodyIndex < melody.length) {
    const key = document.querySelector(`[data-note="${melody[melodyIndex]}"]`);
    playNote(key);

    melodyIndex++;
    setTimeout(playNextNote, 500); // Adjust timing between notes
  }
}
