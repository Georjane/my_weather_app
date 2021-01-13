import './style.css';
import Rose from './pic.jpg'
alert('hello world');

const body = document.querySelector('body');
// const element = document.createElement('div');
const myRose = new Image();
myRose.src = Rose;

body.appendChild(myRose);