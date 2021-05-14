const limit = 10;
const circleRadius = 20;
const marginPercentageBtwnCircles = 0.5;
const sysDate = new Date().toLocaleTimeString();
const circle = document.querySelectorAll('.circle');
const circleColons = document.querySelectorAll('.circle-colon');
let [hh, mm, ss_ampm] = [...new Date().toLocaleTimeString().split(':')];
// let [hh, mm, ss_ampm] = [...'11:58:57 PM'.split(':')];
let [ss, ampm] = [...ss_ampm.split(' ')];
if (hh === '12') hh = '00';
let [hour1, hour2] = [...hh.split('')];
let [minute1, minute2] = [...mm.split('')];
let [second1, second2] = [...ss.split('')];

const mappings = [
  [
    //0
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '0', small: '90' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //1
    [{}, { big: '225', small: '180' }, {}],

    [{ big: '45', small: '90' }, { big: '0', small: '180' }, {}],

    [{}, { big: '0', small: '180' }, {}],

    [{}, { big: '0', small: '180' }, {}],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '0' },
    ],
  ],
  [
    //2
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '90' }, {}, { big: '0', small: '225' }],

    [{}, { big: '45', small: '225' }, {}],

    [{ big: '45', small: '180' }, {}, {}],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '0' },
    ],
  ],
  [
    //3
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '90' }, {}, { big: '0', small: '225' }],

    [{}, { big: '45', small: '135' }, {}],

    [{ big: '180', small: '90' }, {}, { big: '315', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '0' },
    ],
  ],
  [
    //4
    [{ big: '180', small: '180' }, {}, { big: '180', small: '180' }],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '180' },
    ],

    [{}, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '0' }],
  ],
  [
    //5
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, {}],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{}, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //6
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, {}],

    [
      { big: '180', small: '0' },
      { big: '270', small: '90' },
      { big: '180', small: '270' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //7
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '135' }, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '180' }],

    [{}, {}, { big: '0', small: '0' }],
  ],
  [
    //8
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '0', small: '180' },
      { big: '270', small: '90' },
      { big: '0', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
  [
    //9
    [
      { big: '90', small: '180' },
      { big: '90', small: '270' },
      { big: '270', small: '180' },
    ],

    [{ big: '0', small: '180' }, {}, { big: '0', small: '180' }],

    [
      { big: '0', small: '90' },
      { big: '270', small: '90' },
      { big: '0', small: '180' },
    ],

    [{}, {}, { big: '0', small: '180' }],

    [
      { big: '90', small: '0' },
      { big: '90', small: '270' },
      { big: '0', small: '270' },
    ],
  ],
];

circle.forEach((element) => {
  element.style.height = `${2 * circleRadius}px`;
  element.style.width = `${2 * circleRadius}px`;
  element.style.marginLeft = `${marginPercentageBtwnCircles}%`;
});
circleColons.forEach((element) => {
  element.style.height = `${1.3 * circleRadius}px`;
  element.style.width = `${1.3 * circleRadius}px`;
});

const rotateNeedle = (block, row, col, whichNeedle, angle) => {
  if (!angle) {
    document
      .querySelector(`#circle-${block}${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('display', `none`);
  } else {
    document
      .querySelector(`#circle-${block}${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('transform', `rotateZ(${angle}deg)`);
    document
      .querySelector(`#circle-${block}${row}${col} .needle-${whichNeedle}`)
      .style.setProperty('display', `initial`);
  }
};

const showNum = function (num) {
  for (let block = 0; block < 6; block++) {
    for (const [i, arr] of mappings[num].entries()) {
      const [c1, c2, c3] = [...arr];
      // console.log(i, c1, c2, c3);
      rotateNeedle(block, i, 0, 'big', c1?.big);
      rotateNeedle(block, i, 0, 'small', c1?.small);
      rotateNeedle(block, i, 1, 'big', c2?.big);
      rotateNeedle(block, i, 1, 'small', c2?.small);
      rotateNeedle(block, i, 2, 'big', c3?.big);
      rotateNeedle(block, i, 2, 'small', c3?.small);
    }
  }
};

const showNumByBlock = function (block, num) {
  // for (let block = 0; block < 6; block++) {
  // console.log(block, num);
  for (const [i, arr] of mappings[num].entries()) {
    const [c1, c2, c3] = [...arr];
    // console.log(i, c1, c2, c3);
    rotateNeedle(block, i, 0, 'big', c1?.big);
    rotateNeedle(block, i, 0, 'small', c1?.small);
    rotateNeedle(block, i, 1, 'big', c2?.big);
    rotateNeedle(block, i, 1, 'small', c2?.small);
    rotateNeedle(block, i, 2, 'big', c3?.big);
    rotateNeedle(block, i, 2, 'small', c3?.small);
  }
  // }
};
// showNumByBlock(5, 4);
// showNumByBlock(0, 9);
// showNumByBlock(1, 6);
// showNumByBlock(2, 2);
// showNumByBlock(3, 7);
// showNumByBlock(4, 8);
const initClock = function (hour1, hour2, minute1, minute2, second1, second2) {
  for (let block = 0; block < 6; block++) {
    switch (block) {
      case 0:
        showNumByBlock(block, hour1);
        break;
      case 1:
        showNumByBlock(block, hour2);
        break;
      case 2:
        showNumByBlock(block, minute1);
        break;
      case 3:
        showNumByBlock(block, minute2);
        break;
      case 4:
        showNumByBlock(block, second1);
        break;
      case 5:
        showNumByBlock(block, second2);
        break;
    }
  }
};

const clock = () => {
  ss++;
  ss %= 60;
  // console.log(ss);
  if (ss < 10) {
    showNumByBlock(4, 0);
    showNumByBlock(5, ss);
  } else {
    showNumByBlock(4, ss.toString()[0]);
    showNumByBlock(5, ss.toString()[1]);
  }

  if (ss === 0) {
    mm++;
    mm %= 60;
    if (mm < 10) {
      showNumByBlock(2, 0);
      showNumByBlock(3, mm);
    } else {
      showNumByBlock(2, mm.toString()[0]);
      showNumByBlock(3, mm.toString()[1]);
    }
  }
  if (mm === 0 && ss === 0) {
    hh++;
    hh %= 12;
    if (hh < 10) {
      showNumByBlock(0, 0);
      showNumByBlock(1, hh);
    } else {
      showNumByBlock(0, hh.toString()[0]);
      showNumByBlock(1, hh.toString()[1]);
    }
  }
};

//initialize clock with system time.
initClock(hour1, hour2, minute1, minute2, second1, second2);

//begin the clock run
setInterval(clock, 1000);

// console.log(hh, mm, ss, ampm);
// console.log(hour1, hour2, minute1, minute2, second1, second2, ampm);
