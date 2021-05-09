const limit = 10;
const circleRadius = 20;
const marginPercentageBtwnCircles = 1;

document.title = `Count To ${limit}`;
const circle = document.querySelectorAll('.circle');
circle.forEach((element) => {
  element.style.height = `${2 * circleRadius}px`;
  element.style.width = `${2 * circleRadius}px`;
  element.style.marginLeft = `${marginPercentageBtwnCircles}%`;
});

const rotateNeedle = (row, col, whichNeedle, angle) => {
  if (!angle) {
    document
      .querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('display', `none`);
  } else {
    document
      .querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('transform', `rotateZ(${angle}deg)`);
    document
      .querySelector(`#circle-${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('display', `initial`);
  }
};

const showNum = function (num) {
  for (const [i, arr] of mappings[num].entries()) {
    const [c1, c2, c3] = [...arr];
    // console.log(i, c1, c2, c3);
    rotateNeedle(i, 0, 'big', c1?.big);
    rotateNeedle(i, 0, 'small', c1?.small);
    rotateNeedle(i, 1, 'big', c2?.big);
    rotateNeedle(i, 1, 'small', c2?.small);
    rotateNeedle(i, 2, 'big', c3?.big);
    rotateNeedle(i, 2, 'small', c3?.small);
  }
};
// showNum(0);
let number = 0;

const start = () => {
  showNum(number);
  number++;
  stop();
};
let interval = setInterval(start, 1000);
const stop = () => {
  if (number === 10) {
    clearInterval(interval);
  }
};
