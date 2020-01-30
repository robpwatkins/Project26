function calculate () {
  const screen = document.querySelector('.screen');
  const decimal = document.querySelector('.decimal');
  let screenNums = [0];
  let operatorNums = [];
  let runningTotal;
  let currentOperator;
  let tempNums = [];
  let numsSize = 55;
  let lineHeight = 100;
  screen.textContent = screenNums;

  function buttonNumClick (event) {
    if (tempNums.length === 0 && event.target.textContent === '.') {
      tempNums.push(0 + event.target.textContent);
      screen.textContent = tempNums;
      decimal.setAttribute('disabled', 'true');
    } else {
      if (event.target.textContent === '.') {
        tempNums.push(event.target.textContent);
        screen.textContent = tempNums.join('');
        decimal.setAttribute('disabled', 'true');
      } else {
      tempNums.push(event.target.textContent);
      screenNums = [];
      // screenNums.push(Number(tempNums.join('')));
      screenNums.push(tempNums.join(''));
      screen.textContent = screenNums;
      if (tempNums.length > 8 && tempNums.length <=15) {
        screen.style.justifyContent = 'flex-end';
        screen.style.alignItems = 'center';
        lineHeight-=2;
        numsSize-=4;
      }
      if (tempNums.length > 15) {
        lineHeight = 80;
        numsSize-=1;
      }
      document.querySelector('.screenBox').style.lineHeight = `${lineHeight}px`;
      screen.style.fontSize = `${numsSize}px`;
      }
    }
  }

  function operatorClick (event) {
    tempNums = [];
    currentOperator = event.target.textContent;
    operatorNums.push(Number(screenNums.join('')));
    document.querySelector('.decimal').removeAttribute('disabled');
  }

  function equalsClick () {
    operatorNums.push(Number(screenNums.join('')));
    if (currentOperator === '+') {
      runningTotal = operatorNums.reduce((a, b) => a + b);
    }
    if (currentOperator === '-') {
      runningTotal = operatorNums.reduce((a, b) => a - b);
    }
    if (currentOperator === 'X') {
      runningTotal = operatorNums.reduce((a, b) => a * b);
    }
    if (currentOperator === '÷') {
      runningTotal = operatorNums.reduce((a, b) => a / b);
    }
    operatorNums = [];
    screenNums[0] = runningTotal;
    screen.textContent = runningTotal;
    if (runningTotal.toString().length > 8) {
      numsSize = 25;
      lineHeight = 80;
      screen.style.justifyContent = 'flex-end';
      screen.style.alignItems = 'center';
      screen.style.fontSize = `${numsSize}px`;
      document.querySelector('.screenBox').style.lineHeight = `${lineHeight}px`;
    }
  }

  function plusOrMinusClick () {
    screenNums[0] = screenNums[0] * -1;
    screen.textContent = screenNums;
  }

  function moduloClick () {
    screenNums[0] = screenNums[0] * .01;
    screen.textContent = screenNums;
  }

  function clearAC () {
    screen.textContent = '0';
    screenNums = [];
    operatorNums = [];
    runningTotal = null;
    currentOperator = null;
    tempNums = [];
    screen.style.fontSize = '55px';
    screen.style.justifyContent = 'center';
    screen.style.alignItems = 'flex-end';
    numsSize = 55;
    lineHeight = 100;
    document.querySelector('.decimal').removeAttribute('disabled');
  }

  function buttonClicked (event) {
    event.target.classList.add('buttonClicked');
  }

  function removeButtonClicked () {
    this.classList.remove('buttonClicked');
  }

  document.querySelectorAll('.buttonNum').forEach(button => button.addEventListener('click', buttonNumClick));
  document.querySelectorAll('.buttonOperator').forEach(button => button.addEventListener('click', operatorClick));
  document.querySelector('.equals').addEventListener('click', equalsClick);
  document.querySelector('.AC').addEventListener('click', clearAC);
  document.querySelector('.modulo').addEventListener('click', moduloClick);
  document.querySelector('.plusOrMinus').addEventListener('click', plusOrMinusClick);
  document.querySelectorAll('.button').forEach(button => button.addEventListener('click', buttonClicked));
  document.querySelectorAll('.button').forEach(button => button.addEventListener('transitionend', removeButtonClicked));
}

calculate();