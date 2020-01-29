function calculate () {
  const screen = document.querySelector('.screen');
  let screenNums = [0];
  let operatorNums = [];
  let runningTotal;
  let currentOperator;
  let tempNums = [];
  screen.textContent = screenNums;

  function buttonNumClick (event) {
    tempNums.push(event.target.textContent);
    screenNums = [];
    if (event.target.textContent === '.') {
      screenNums.push(0 + event.target.textContent)
      screen.textContent = screenNums;
      document.querySelector('.decimal').setAttribute('disabled', 'true');
    } else {
      screenNums.push(Number(tempNums.join('')));
      screen.textContent = screenNums;
    }
      if (tempNums.length > 8) {
        let numsLength = 8;
        let numsLengthPlus = tempNums.length;
        console.log(numsLength, numsLengthPlus);
        let numsSize = 55;
        if (numsLengthPlus > numsLength) {
          numsSize += numsLength - numsLengthPlus;
        }
        document.querySelector('.screen').style.fontSize = `${numsSize}px`;
      }
  }

  
  function operatorClick (event) {
    tempNums = [];
    event.target.style.background = 'white';
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
    if (currentOperator === '/') {
      runningTotal = operatorNums.reduce((a, b) => a / b);
    }
    operatorNums = [];
    screenNums[0] = runningTotal;
    screen.textContent = runningTotal;
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
    document.querySelector('.decimal').removeAttribute('disabled');
  }

  function buttonClicked (event) {
    event.target.classList.add('buttonClicked');
  }

  function removeButtonClicked (event) {
    if (event.propertyName !== 'transform') return;
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