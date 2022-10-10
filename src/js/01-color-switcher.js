const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);
let timerId = null;

function onClickStart() {
  timerId = setInterval(styleBgColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onClickStop() {
  clearTimeout(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function styleBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
