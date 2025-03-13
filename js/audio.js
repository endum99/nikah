const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  }

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function () { }
  rootElement.style.scrollBehavior = 'smooth';
  // localStorage.setItem('opened', 'true');
  playAudio();
}

function playAudio() {
  song.volume = 0.9;
  audioIconWrapper.style.display = 'flex';
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove('bi-disc-fill');
    audioIcon.classList.add('bi-pause-circle-fill');
  } else {
    song.play();
    audioIcon.classList.add('bi-disc-fill');
    audioIcon.classList.remove('bi-pause-circle-fill');
  }

  isPlaying = !isPlaying;
}

// if (!localStorage.getItem('opened')) {
//   disableScroll();
// }
disableScroll();