const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const myWidth = rootStyles.getPropertyValue('--my-width'); 
const myHeight = rootStyles.getPropertyValue('--my-height');
const myBorder = rootStyles.getPropertyValue('--my-border');

let lengtSide = `${Math.round(Math.sqrt(parseInt(myHeight) ** 2 + (parseInt(myWidth) / 2) ** 2))}px`;



const myDeg = (Math.asin((parseInt(myWidth) / 2) / parseInt(lengtSide)) * (180/Math.PI)).toFixed(5);

const myDegSide = 180 - 90 - myDeg;

console.log(myDegSide);setInterval(() => {
  const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const myWidth = rootStyles.getPropertyValue('--my-width'); 
const myHeight = rootStyles.getPropertyValue('--my-height');
const myBorder = rootStyles.getPropertyValue('--my-border');

let lengtSide = `${Math.round(Math.sqrt(parseInt(myHeight) ** 2 + (parseInt(myWidth) / 2) ** 2))}px`;

const myDeg = (Math.asin((parseInt(myWidth) / 2) / parseInt(lengtSide))* (180/Math.PI)).toFixed(5);

const myDegSide = 180 - 90 - myDeg;
const shift =  Math.sqrt(((parseInt(lengtSide) /2) ** 2) -((parseInt(myHeight) / 2) ** 2));
  console.log(shift);
  
// console.log(myDegSide);

const left = document.querySelector('.left');
const right = document.querySelector('.right');


left.style.width = lengtSide;
// left.style.top = `${parseInt(lengtSide) / 2 - parseInt(myBorder)}px`;
left.style.transform = `rotate(${-myDegSide}deg)`

right.style.width = lengtSide;
right.style.top = `${parseInt(lengtSide) / 2 - parseInt(myBorder)}px`;
  console.log(`${parseInt(lengtSide) / 2 - parseInt(myBorder)}px`);
right.style.transform = `rotate(${myDegSide}deg)`


// console.log(lengtSide);
}, 1000);


const left = document.querySelector('.left');
const right = document.querySelector('.right');


left.style.width = lengtSide;
left.style.top = `${parseInt(lengtSide) / 2 - parseInt(myBorder) - 3}px`;
left.style.transform = `rotate(${-myDegSide}deg)`

right.style.width = lengtSide;
right.style.top = `${parseInt(lengtSide) / 2 - parseInt(myBorder) - 3}px`;
right.style.transform = `rotate(${myDegSide}deg)`


console.log(lengtSide);