import { setTimeout } from 'core-js';
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

console.log(refs.body);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const birthday = new Date(1992, 9, 21)
console.log(birthday);