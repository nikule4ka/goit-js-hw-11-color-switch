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


const switchColor = {
  intervalId: null,

  onBtnStart() {
    this.intervalId = setInterval(this.ChangeBodyColor, 1000);
    refs.start.disabled = true;
  },

  ChangeBodyColor() {
    
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
},

  onBtnStop() {
    clearInterval(this.intervalId);
    refs.start.disabled = false;
  }
};

function   randomIntegerFromInterval(min, max)  {
   return Math.floor(Math.random() * (max - min + 1) + min);
  };


refs.start.addEventListener('click', switchColor.onBtnStart.bind(switchColor));
refs.stop.addEventListener('click', switchColor.onBtnStop.bind(switchColor)); 



// console.log(refs.body);

// refs.start.addEventListener('click', onBtnStart);
// refs.stop.addEventListener('click', onBtnStop); 

// let intervalId;

// function onBtnStart() {
//   intervalId = setInterval(changeBodyColor, 1000);
//   refs.start.disabled = true;
// }


// function changeBodyColor() {
//   refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)]
// }

// console.log(changeBodyColor);

// function onBtnStop() {
//   clearInterval(intervalId);
//   refs.start.disabled = false;
// }

// const randomIntegerFromInterval = (min, max) => {
//    return Math.floor(Math.random() * (max - min + 1) + min);
//  };