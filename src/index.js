import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]')
}

refs.start.addEventListener('cklick', onBtnStart);
refs.stop.addEventListener('cklick', onBtnStop); 

 const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };



const switchColor = {
  isActive: true,
  intervalId: null,

  start() {
    if (!this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(ChangeBodyColor, 1000, colors);
  }

  ChangeBodyColor(colorarr) {
    body
  }

  stop() {
    this.intervalId = null;
    this.isActive = false;


  }
}
